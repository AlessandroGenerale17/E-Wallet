import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../../components/Form';

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
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export default AddAsset;
