import React, {RefObject, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Button, Headline} from 'react-native-paper';

interface VerifyProps {
  navigation: any;
}

export const Verify: React.FC<VerifyProps> = ({navigation}) => {
  const [s, setS] = useState(true);
  const [fourDigit, setFourDigit] = useState(false);

  return (
    <View style={styles.parent}>
      <Headline style={styles.text}>Verify</Headline>

      <OTPInputView
        pinCount={6}
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.borderStyleBase}
        keyboardType="number-pad"
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
      />

      <Button mode="contained" onPress={() => navigation.navigate('Signup')}>
        VERIFY
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    justifyContent: 'center',
    padding: 32,
    marginTop: 40,
  },

  borderStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: 'red',
  },

  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
});

export default Verify;
