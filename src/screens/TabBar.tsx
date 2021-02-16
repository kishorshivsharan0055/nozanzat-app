import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';

type tabBarProps = {
    state: any,
    navigation: any
}

const width = Dimensions.get('screen').width

const TabBar: React.FC<tabBarProps> = ({ state , navigation }) => {
    const {routes} = state;
    

        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>

                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        width,
        height: 50,
        backgroundColor: 'red',
    },

    container: {

    }
})

export default TabBar;