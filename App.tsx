import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import AssetDetails from './screens/assetDetails/';
import { RootStackParamList } from './types/RootStackParamList';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;
