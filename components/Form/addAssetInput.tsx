import React from 'react';
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
    StyleSheet,
    View
} from 'react-native';
import { Asset } from '../../types/Asset';
import Input from '../Input';
import InputDropdown from '../SuggestionsDropdown';

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
            <View style={style.inputContainer}>
                <Input
                    placeholder='e.g. Google'
                    onChange={e => onChange(e)('identifier')}
                    onBlur={e => onBlur(e)('identifier')}
                />
            </View>
            <InputDropdown suggestions={suggestions} />
        </>
    );
};

export default AddAssetInput;

const style = StyleSheet.create({
    inputContainer: {
        width: '90%',
        height: '10%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3%'
    }
});
