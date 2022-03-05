import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../../components/Form';
import SliderIndicator from '../../components/Form/sliderIndicator';

type AddAssetFlow = {
    stages: string[];
    currentStage: number;
};

const AddAsset: React.FC = () => {
    const [addAssetFlow, setAddAssetFlow] = useState<AddAssetFlow>({
        stages: ['addAsset', 'addQuantity', 'addCheckpoints'],
        currentStage: 0
    });

    const onScroll = (direction: string) => {
        const { currentStage, stages } = addAssetFlow;
        if (direction === 'left' && currentStage === 0) return;
        if (direction === 'right' && currentStage === stages.length - 1) return;

        setAddAssetFlow(prev => ({
            ...prev,
            currentStage:
                direction === 'left'
                    ? prev.currentStage - 1
                    : prev.currentStage + 1
        }));
    };

    return (
        <View style={styles.view}>
            <Form onScroll={onScroll} />
            <SliderIndicator slide={addAssetFlow.currentStage} />
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
