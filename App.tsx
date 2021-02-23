import {NavigationContainer} from '@react-navigation/native';
import React, {createContext} from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import NavigationRoutes from './src/routes/NavigationRoutes';

export let TotalContext = createContext(2);

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
    <TotalContext.Provider value={2}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <NavigationRoutes />
        </PaperProvider>
      </NavigationContainer>
    </TotalContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
