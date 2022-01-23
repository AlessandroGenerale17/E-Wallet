import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectDummyState } from '../../store/assets/selector';

const AssetDetails: React.FC = () => {
    const dummySelector = useSelector(selectDummyState);
    return (
        <View>
            <Text>I am the details</Text>
            <Text>{dummySelector.assets.length}</Text>
            <Text>{dummySelector.assets[1]}</Text>
        </View>
    );
};

export default AssetDetails;
 