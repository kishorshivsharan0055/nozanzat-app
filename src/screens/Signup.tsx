import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import {TextInput, Button} from 'react-native-paper'

interface SignupProps {

}

export const Signup: React.FC<SignupProps> = ({}) => {
        return (
            <View style={styles.parent}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../images/logo.png')} style={styles.logo}/>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Register</Text>

                    <TextInput
                        label="Name"
                        mode='outlined'
                        style={styles.inputTextStyle}    
                    />

                    <TextInput
                        label="Email ID"
                        mode='outlined'
                        style={styles.inputTextStyle}    
                    />

                    <TextInput
                        label="City"
                        mode='outlined'
                        style={styles.inputTextStyle}    
                    />

                    <Button mode='contained' color='red' style={{marginTop: 10}}>SUBMIT</Button>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    parent: {
		width: "100%",
		justifyContent: "center",
		padding: 32,
        marginTop: 40,

	},

    logo: {
        width: 200,
        height: 70,
        
    },

    inputTextStyle: {
        height: 40, 
        width: '100%',
        paddingBottom: 20
    },

    text: {
        fontFamily: 'Poppins-Medium'
    }
});

export default Signup;