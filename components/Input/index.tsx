import React from 'react';
import {
    NativeSyntheticEvent,
    TextInput,
    TextInputChangeEventData
} from 'react-native';
import styled from 'styled-components/native';

type Props = {
    placeholder: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onBlur: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

type StyleProps = { bgColor: 'red' };

const StyledInput = styled.TextInput<StyleProps>`
    width: 80%;
    background-color: ${props => props.bgColor};
`;

const Input: React.FC<Props> = props => (
    <StyledInput {...props} bgColor='red' />
);
export default Input;
