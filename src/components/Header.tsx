import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        elevation: 5,
        height: 50,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
          fontWeight: 'bold',
          textAlign: 'center',
          fontStyle: 'italic',
          color: 'black',
        }}>
        NoZanzat
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
