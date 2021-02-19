import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import  TabNavigator from './src/screens/TabNavigator';
import NavigationRoutes from './src/routes/NavigationRoutes';
import HomeRoutes from './src/routes/HomeRoutes';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: '#f1c40f',
  },
};



const App = () => {
  return (
    <NavigationContainer >
    <PaperProvider theme={theme}>
      <NavigationRoutes  />
    </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
