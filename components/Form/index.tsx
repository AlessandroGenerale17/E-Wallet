import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    NativeSyntheticEvent,
    TextInputChangeEventData
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Input from '../Input';
import InputDropdown from '../SuggestionsDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from '../../store/addAssetFlow/actions';
import { selectInputFieldSuggestions } from '../../store/addAssetFlow/selectors';
import { Asset } from '../../types/Asset';

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

type Props = {};

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

        const timeout = setTimeout(() => {
            // or dispatch an action
            if (searchTerm) dispatch(fetchSuggestions(identifier.val));
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
            <View>
                <Text>Asset</Text>
                <View
                    style={[
                        {
                            borderColor: formState.identifier.error
                                ? 'red'
                                : 'black'
                        },
                        styles.inputContainer
                    ]}>
                    <Input
                        placeholder='e.g. Google'
                        onChange={e => onChange(e)('identifier')}
                        onBlur={e => onBlur(e)('identifier')}
                    />
                </View>
                <InputDropdown suggestions={suggestions} />
            </View>
            <View>
                {formState.identifier.error && (
                    <Text>Info Error: {formState.identifier.error}</Text>
                )}
            </View>
            <View>
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        marginTop: `${MARGIN_HEIGHT}%`,
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        padding: '2%',
        borderWidth: 3,
        borderRadius: 9,
        marginBottom: '2%',
        flexDirection: 'row'
    }
});

export default Form;
