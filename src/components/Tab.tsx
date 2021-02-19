import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {account, calculator, home} from '../images/Images';

interface TabProps {
  tab: any;
  icon: string;
  onPress: any;
  color: any;
}

export const Tab: React.FC<TabProps> = ({tab, icon, onPress, color}) => {
  let src = home;
  if (icon == 'home') {
    src = home;
  } else if (icon == 'account') {
    src = account;
  } else {
    src = calculator;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Image style={styles.icon} source={src} />}
      <Text style={{color}}> {tab.name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
