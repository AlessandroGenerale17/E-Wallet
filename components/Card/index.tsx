import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Card: React.FC = () => {
    const [state, setState] = useState<'up' | 'down'>('up');
    return (
        <View style={styles.card}>
            <Text style={styles.assetName}>Bitcoin</Text>
            <Text style={styles.value}>58,760.64$</Text>
            <View style={styles.cardData}>
                <Text style={styles[state]}>+2,478.59</Text>
                <Text style={styles[state]}>(+4.40%)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    assetName: {
        position: 'absolute',
        top: 2,
        left: 5,
        fontSize: 15
    },
    card: {
        display: 'flex',
        backgroundColor: 'lightgray',
        position: 'relative',
        padding: '2%',
        borderRadius: 12
    },
    cardData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    value: {
        textAlign: 'center'
    },
    up: {
        color: 'green'
    },
    down: {
        color: 'red'
    }
});

export default Card;
