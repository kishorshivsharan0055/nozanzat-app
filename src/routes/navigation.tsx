import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login';

interface navigationProps {

}

const Stack = createStackNavigator();

export const navigation: React.FC<navigationProps> = ({}) => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
        );
}