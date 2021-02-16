import React, { useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

function Login() {

    return (
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>

            <View style={{marginTop: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Login</Text>

            <TextInput
                label="Phone No"
                mode='outlined'
                style={{height: 40, width: 300}}    
            />

            <Button mode='contained' color='red' style={{marginTop: 10}}>Get OTP</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 200
    },
    logo: {
        width: 200,
        height: 70
    }
});

export default Login;