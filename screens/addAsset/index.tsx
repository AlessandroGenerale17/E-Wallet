import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../../components/Form';
import SliderIndicator from '../../components/Form/sliderIndicator';

type AddAssetFlow = {
    stages: ['addAsset' | 'addQuantity' | 'addCheckpoints'];
    currentStage: string;
};

const AddAsset: React.FC = () => {
    const [addAssetFlow, setAddAssetFlow] = useState<AddAssetFlow>();

    const onSubmit = () => console.log('submit');

    return (
        <View style={styles.view}>
            <Form onSubmit={onSubmit} />
            {/* Slider indicator */}
            <SliderIndicator />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        position: 'relative'
    }
});

export default AddAsset;
