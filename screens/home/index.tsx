import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../../components/Card/';
import {
    RootStackParamList,
    ScreenNavigationProp,
    ScreenRouteProp
} from '../../types/RootStackParamList';

type Props<T extends keyof RootStackParamList> = {
    route: ScreenRouteProp<T>;
    navigation: ScreenNavigationProp<T>;
};

const Home: React.FC<Props<'Home'>> = ({ navigation }) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Assets</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.addAssetButton}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.assetsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AssetDetails')}>
                    <Card />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingLeft: '1%',
        paddingRight: '1%',
        borderRadius: 5
    },
    addAssetButton: {
        color: 'black'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    assetsContainer: {
        padding: '3%'
    }
});

export default Home;
