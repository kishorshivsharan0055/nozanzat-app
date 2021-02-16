import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Login from './Login';

export default createMaterialBottomTabNavigator({
  Album: { screen: Login },
  Library: { screen: Login },
  History: { screen: Login },
  Cart: { screen: Login },
}, {
  initialRouteName: 'Album',
  activeColor: '#F44336',
});

const Home = () => {
    return (
        <>
        <View>
            <Text>Home Page</Text>
        </View>
        </>
    )
}