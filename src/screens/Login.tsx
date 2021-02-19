import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type loginProps = {
  state: any;
  navigation: any;
};

const Login: React.FC<loginProps> = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <Image source={require('../images/logo.png')} style={styles.logo} />

      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            fontFamily: 'Poppins-Medium',
          }}>
          Login
        </Text>

        <TextInput
          label="Phone No"
          mode="outlined"
          style={{height: 40, width: '100%', paddingTop: 5}}
        />

        <Button
          mode="contained"
          color="red"
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('Verify')}>
          Get OTP
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    justifyContent: 'center',
    padding: 32,
    marginTop: '50%',
  },
  logo: {
    width: 260,
    height: 90,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Login;
