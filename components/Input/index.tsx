import React from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData,
    StyleSheet
} from 'react-native';

type Props = {
    placeholder: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onBlur: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const Input: React.FC<Props> = props => (
    <TextInput style={style.input} {...props} placeholderTextColor={'white'} />
);
export default Input;

const style = StyleSheet.create({
    input: {
        backgroundColor: 'black',
        color: 'white',
        width: '100%'
    }
});
