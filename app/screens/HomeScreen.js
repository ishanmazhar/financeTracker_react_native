import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.title}>Finance Tracker</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    welcome: {
        fontSize: 30,
        color: "maroon"
    },
    title: {
        fontSize: 40,
        color: "maroon",
        padding: 10,
    },
    titleMessage: {
        fontSize: 20,
        color: "maroon", 
    }
})

export default HomeScreen;