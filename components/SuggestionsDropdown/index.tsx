import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const StyledView = styled.View`
    background-color: papayawhip;
`;

type Props = {
    // limit the number of suggestions to be shown
    limit?: number;
    suggestions: string[];
};

const InputDropdown: React.FC<Props> = ({ suggestions, limit }) => {
    const suggestionLimit = limit ? limit : 3;
    const suggestionsToPrompt = suggestions.slice(0, suggestionLimit);
    return (
        <StyledView>
            {suggestionsToPrompt.map(suggestion => (
                <Text>{suggestion}</Text>
            ))}
        </StyledView>
    );
};

export default InputDropdown;
