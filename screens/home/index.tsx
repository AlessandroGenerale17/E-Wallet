import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
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

const Home: React.FC<Props<'Home'>> = ({navigation}) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Assets</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AssetDetails')}>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {},
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
});

export default Home;
