import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/**
 * Local Imports
 */
import { ProductScreen } from '../containers/index';

export default function AppNavigator () {
    
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="productScreen" component={ProductScreen}/>
        </Stack.Navigator>
    )
}