import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import Home from '../screens/home';
import AssetDetails from '../screens/assetDetails';
import AddAsset from '../screens/addAsset';
import theme from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.VFC = () => {
    /* TODO: will be managed by some global state */
    const dark = true;
    return (
        <NavigationContainer theme={dark ? theme(1) : theme(0)}>
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
                <Stack.Screen
                    name='AddAsset'
                    component={AddAsset}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
