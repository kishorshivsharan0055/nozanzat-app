import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home';
import { Calculator } from './Calculator';
import { Account } from './Account';
import TabBar from './TabBar';



const tabs = createBottomTabNavigator();

export const TabNavigator = () => {

        return (
            <tabs.Navigator tabBar={props => <TabBar {...props} />} >
                <tabs.Screen name="Home" component={Home} />
                <tabs.Screen name="Calculator" component={Calculator} />
                <tabs.Screen name="Account" component={Account} />
            </tabs.Navigator>
        );
}

export default TabNavigator;