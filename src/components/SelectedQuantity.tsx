import React from 'react';
import {Image, Text, View} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

interface selectedQuantitiesProps {
  title: string;
}

export const SelectedQuantities: React.FC<selectedQuantitiesProps> = ({
  title,
}) => {
  console.log(title);
  return (
    <View style={{padding: 10, paddingBottom: 25}}>
      <Text> {title} </Text>
      <View
        style={{
          position: 'absolute',
          right: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <InputSpinner
          max={50}
          min={8}
          initialValue={8}
          rounded={false}
          showBorder
          color="white"
          buttonTextColor="black"
          buttonFontSize={20}
          width={120}
          style={{
            borderRadius: 30,
            elevation: 10,
          }}
          height={35}
          buttonStyle={{borderRadius: 30, width: 30}}
          background="white"
        />
        <Image
          source={require('../images/delete.png')}
          style={{width: 15, height: 20, marginLeft: 10}}
        />
      </View>
    </View>
  );
};

export default SelectedQuantities;
