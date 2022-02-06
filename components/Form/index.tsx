import React, { SyntheticEvent, useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    ScrollView,
    NativeScrollEvent
} from 'react-native';
import AddAssetInput from './addAssetInput';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchSuggestions,
    clearSuggestions
} from '../../store/addAssetFlow/actions';
import { selectInputFieldSuggestions } from '../../store/addAssetFlow/selectors';
import { Asset } from '../../types/Asset';
import HideKeyboard from '../HideKeyBoard';

const MARGIN_HEIGHT: number = Dimensions.get('window').height * 0.02;
const WIDTH: number = Dimensions.get('window').width;

type Checkpoint = {
    id: string;
    mark: string;
    direction: string;
    precision: string;
};

type FormState = {
    identifier: { val: string; error: string | null };
    quantity: { val: string; error: string | null };
    checkpoints: { val: Checkpoint[]; error: string | null };
};

type Props = {
    onScroll: (direction: string) => void;
};

const Form: React.FC<Props> = ({ onScroll }) => {
    const [formState, setFormState] = useState<FormState>({
        identifier: { val: '', error: null },
        quantity: { val: '', error: null },
        checkpoints: { val: [], error: null }
    });
    const [currentOffset, setCurrentOffset] = useState<number>(0);
    const dispatch = useDispatch();

    const suggestions: Asset[] = useSelector(selectInputFieldSuggestions);

    useEffect(() => {
        const { identifier } = formState;

        let searchTerm = identifier.val.trim();

        if (!searchTerm.length && suggestions.length)
            dispatch(clearSuggestions());
        const timeout = setTimeout(() => {
            // or dispatch an action
            if (searchTerm.length) dispatch(fetchSuggestions(identifier.val));
        }, 1000);

        return () => clearTimeout(timeout);
    }, [formState.identifier.val]);

    const onChange =
        (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
        (name: string) => {
            const userInput: string = e.nativeEvent.text;
            setFormState(prevState => ({
                ...prevState,
                [name]: { val: userInput, error: null }
            }));
        };

    const onBlur =
        (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
        async (name: string) => {
            let userInput = e.nativeEvent.text;
            if (!userInput?.trim().length) return;
            if (name === 'identifier') {
                try {
                    // process to make a request to see if specific stock exists
                    console.log(`Does ${userInput} exist ?`);
                    // if it exists sucess state
                    // else error state
                } catch (err) {
                    if (err instanceof Error) console.log(err);
                }
            }

            if (name === 'quantity') {
                const numericInput = parseFloat(userInput);
                if (!numericInput) return;
                if (numericInput < 0) {
                    setFormState(prevState => ({
                        ...prevState,
                        quantity: {
                            ...prevState.quantity,
                            error: 'The quantity cannot be below 0'
                        }
                    }));
                    return;
                }
            }
        };

    const scrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offset = e.nativeEvent.contentOffset.x;
        const direction = offset < currentOffset ? 'left' : 'right';
        setCurrentOffset(offset);
        onScroll(direction);
    };

    return (
        <ScrollView
            snapToInterval={WIDTH}
            horizontal
            onScroll={scrollHandler}
            bounces={false}>
            <HideKeyboard viewStyle={styles.TouchableWithoutFeedback}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Asset</Text>
                    <AddAssetInput
                        suggestions={suggestions}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </View>
                <View style={styles.errorContainer}>
                    {formState.identifier.error && (
                        <Text>Info Error: {formState.identifier.error}</Text>
                    )}
                </View>
            </HideKeyboard>
            <HideKeyboard viewStyle={styles.TouchableWithoutFeedback}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Quantity</Text>
                    <AddAssetInput
                        suggestions={suggestions}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </View>
                <View style={styles.errorContainer}>
                    {formState.identifier.error && (
                        <Text>Info Error: {formState.identifier.error}</Text>
                    )}
                </View>
            </HideKeyboard>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 50
    },
    TouchableWithoutFeedback: {
        height: '100%'
    },
    inputContainer: {
        width: WIDTH,
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    errorContainer: {
        flex: 1
    }
});

export default Form;
