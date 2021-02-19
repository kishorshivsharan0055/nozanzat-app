import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Verify from '../screens/Verify';
import Signup from '../screens/Signup';
import HomeRoutes from './HomeRoutes';

const Stack = createStackNavigator();

export const NavigationRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{title: '', headerTransparent: true}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeRoutes}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoutes;
