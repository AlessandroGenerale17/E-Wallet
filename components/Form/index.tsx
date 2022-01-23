import React, { useState } from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    NativeSyntheticEvent,
    TextInputChangeEventData
} from 'react-native';

type FormState = {
    identifier: string;
    quantity: string;
};

const MARGIN_HEIGHT: number = Dimensions.get('window').height * 0.02;

type Props = {
    placeholder: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onBlur: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const Input: React.FC<Props> = (props: Props) => (
    <TextInput {...props} style={{ width: '80%' }} />
);

const Form: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        identifier: '',
        quantity: ''
    });

    const onChange =
        (e: NativeSyntheticEvent<TextInputChangeEventData>) => (name: string) =>
            setFormState(prevState => ({
                ...prevState,
                [name]: e.nativeEvent.text
            }));
    console.log(formState);
    return (
        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Text>Asset</Text>
                <Input
                    placeholder='e.g. Google'
                    onChange={e => onChange(e)('identifier')}
                    onBlur={(
                        e: NativeSyntheticEvent<TextInputChangeEventData>
                    ) => console.log('hello')}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Quantity</Text>
                <Input
                    placeholder='e.g. 2'
                    onChange={e => onChange(e)('quantity')}
                    onBlur={(
                        e: NativeSyntheticEvent<TextInputChangeEventData>
                    ) => console.log('hello')}
                />
            </View>
            <Text>Track your asset now</Text>
            <Text>Place as many checkpoints as you deem necessary</Text>
            <View>
                <Text>Your Checkpoints</Text>
                <View></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        marginTop: ` ${MARGIN_HEIGHT}%`,
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        padding: '2%',
        borderWidth: 1,
        borderRadius: 9,
        marginBottom: '5%'
    }
});

export default Form;
