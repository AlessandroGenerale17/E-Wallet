import React from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData,
    StyleSheet
} from 'react-native';
import useTheme from '../../theme/';

type Props = {
    placeholder: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onBlur: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const Input: React.FC<Props> = props => {
    const theme = useTheme(1);
    return (
        <TextInput
            style={[{ backgroundColor: theme.colors.background }, style.input]}
            {...props}
            placeholderTextColor={'white'}
            selectionColor={'white'}
        />
    );
};
export default Input;

const style = StyleSheet.create({
    input: {
        color: 'white',
        width: '100%'
    }
});
