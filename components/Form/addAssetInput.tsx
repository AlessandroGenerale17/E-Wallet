import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import styled from 'styled-components/native';
import { Asset } from '../../types/Asset';
import Input from '../Input';
import InputDropdown from '../SuggestionsDropdown';

const StyledView = styled.View`
    width: 90%;
    align-items: center;
    padding: 2%;
    border-width: 3;
    border-radius: 9;
    margin-bottom: 2%;
    flex-direction: row;
`;

type Props = {
    suggestions: Asset[];
    onChange: (
        e: NativeSyntheticEvent<TextInputChangeEventData>
    ) => (name: string) => void;

    onBlur: (
        e: NativeSyntheticEvent<TextInputChangeEventData>
    ) => (name: string) => void;
};

const AddAssetInput: React.FC<Props> = ({ suggestions, onChange, onBlur }) => {
    return (
        <>
            <StyledView>
                <Input
                    placeholder='e.g. Google'
                    onChange={e => onChange(e)('identifier')}
                    onBlur={e => onBlur(e)('identifier')}
                />
            </StyledView>
            <InputDropdown suggestions={suggestions} />
        </>
    );
};

export default AddAssetInput;
