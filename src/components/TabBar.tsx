import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Tab} from './Tab';

type tabBarProps = {
  state: any;
  navigation: any;
};

interface routesInterface {
  name: string;
}

const width = Dimensions.get('screen').width;

const TabBar: React.FC<tabBarProps> = ({state, navigation}) => {
  const {routes} = state;
  const [Selected, setSelected] = useState('Home');

  const renderColor = (currentTab: string) =>
    currentTab === Selected ? 'red' : 'black';

  const handlePress = (activeTab: string, index: any) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  console.log(state.routes);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route: any, index: any) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;
