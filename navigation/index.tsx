import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import Home from '../screens/home';
import AssetDetails from '../screens/assetDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.VFC = () => {
    return (
        <NavigationContainer>
            {/* First in the stack is default  */}
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'Welcome user!' }}
                />
                <Stack.Screen
                    name='AssetDetails'
                    component={AssetDetails}
                    options={{ title: 'Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
