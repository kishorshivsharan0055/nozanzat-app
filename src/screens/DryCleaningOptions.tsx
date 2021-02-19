import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface DryCleaningOptionsProps {}

export const DryCleaningOptions: React.FC<DryCleaningOptionsProps> = ({}) => {
  return (
    <View style={styles.parent}>
      <Text style={{fontSize: 15}}>Select options from Dry Cleaning</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: 'absolute',
    margin: 5,
    right: 0,
    backgroundColor: 'red',
    bottom: -80,
  },
});

export default DryCleaningOptions;
