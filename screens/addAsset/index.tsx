import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../../components/Form';

const AddAsset: React.FC = () => {
    return (
        <View style={styles.view}>
            <Form />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export default AddAsset;
