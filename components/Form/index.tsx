import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    Keyboard
} from 'react-native';
import AddAssetInput from './addAssetInput';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchSuggestions,
    clearSuggestions
} from '../../store/addAssetFlow/actions';
import { selectInputFieldSuggestions } from '../../store/addAssetFlow/selectors';
import { Asset } from '../../types/Asset';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HideKeyboard from '../HideKeyBoard';

const MARGIN_HEIGHT: number = Dimensions.get('window').height * 0.02;

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
    onSubmit: () => void;
};

const Form: React.FC<Props> = ({}) => {
    const [formState, setFormState] = useState<FormState>({
        identifier: { val: '', error: null },
        quantity: { val: '', error: null },
        checkpoints: { val: [], error: null }
    });

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

    return (
        <View style={styles.form}>
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
                {/* Slider indicator */}
            </HideKeyboard>

            {/* <View>
                <Text>Quantity</Text>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder='e.g. 2'
                        onChange={e => onChange(e)('quantity')}
                        onBlur={e => onBlur(e)('quantity')}
                    />
                </View>
            </View>
            <View>
                {formState.quantity.error && (
                    <Text>Info Error: {formState.quantity.error}</Text>
                )}
            </View>
            <Text>Track your asset now</Text>
            <Text>Place as many checkpoints as you deem necessary</Text>
            <View>
                <View>
                    <Text>Your Checkpoints:</Text>
                    <TouchableOpacity>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 50
    },
    TouchableWithoutFeedback: {
        height: '100%'
    },
    inputContainer: {
        width: '90%',
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    errorContainer: {
        flex: 1
    }
});

export default Form;
