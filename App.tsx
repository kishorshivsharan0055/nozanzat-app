import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Login from './src/screens/Login';
import Verify from './src/screens/Verify';
import Signup from './src/screens/Signup';


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
    <NavigationContainer>
    <PaperProvider theme={theme}>
    <View>
      <Signup />
    </View>
    </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
