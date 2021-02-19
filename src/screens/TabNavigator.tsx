import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {Calculator} from './Calculator';
import {Account} from './Account';
import TabBar from '../components/TabBar';

const tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <tabs.Navigator
      tabBarOptions={{keyboardHidesTabBar: true}}
      tabBar={(props) => <TabBar {...props} />}>
      <tabs.Screen
        name="Home"
        component={Home}
        initialParams={{icon: 'home'}}
      />
      <tabs.Screen
        name="Account"
        component={Account}
        initialParams={{icon: 'account'}}
      />
    </tabs.Navigator>
  );
};

export default TabNavigator;
