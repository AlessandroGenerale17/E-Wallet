import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Asset } from '../../types/Asset';

const StyledView = styled.View`
    background-color: papayawhip;
`;

type Props = {
    // limit the number of suggestions to be shown
    limit?: number;
    suggestions: Asset[];
};

const InputDropdown: React.FC<Props> = ({ suggestions, limit }) => {
    console.log('inputDropdown ', suggestions);
    const suggestionLimit = limit ? limit : 3;
    const suggestionsToPrompt = suggestions.slice(0, suggestionLimit);
    return (
        <StyledView>
            {/* FIXME getting data back in an annying way 
                BACKEND needs fixing on response
            */}
            {suggestionsToPrompt.map(suggestion => (
                <Text key={suggestion.symbol}>{suggestion.symbol}</Text>
            ))}
        </StyledView>
    );
};

export default InputDropdown;
