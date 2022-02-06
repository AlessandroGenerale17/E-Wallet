import React from 'react';
import { View, StyleSheet } from 'react-native';

const SliderIndicator = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.circle, styles.circleActive]}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        top: 700,
        left: 130,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        padding: '5%'
    },
    circle: {
        width: '20%',
        height: '60%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white'
    },
    circleActive: {
        backgroundColor: 'white'
    },
    circleInactive: {
        backgroundColor: 'black'
    }
});

export default SliderIndicator;
