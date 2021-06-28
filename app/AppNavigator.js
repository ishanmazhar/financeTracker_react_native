import React from 'react';
import NewAccount from './screens/NewAccount';
import HomeScreen from './screens/HomeScreen';
import AllAccounts from './screens/AllAccounts';
import Icons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

export const NavigationTab = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="All Accounts"
                component={AllAccounts}
            // options={{
            //     tabBarIcon: ({ color, size }) => (
            //         <Icons name="md-map" color={color} size={size} />
            //     )
            // }}
            />
            <Tab.Screen
                name="New Account"
                component={NewAccount}
                // options={{
                //     tabBarIcon: () => (
                //         <Icons name="plus" color="red" size="40" />
                //     )
                // }}
            />
        </Tab.Navigator>
    );
}

const AppNavigator = (props) => {

    return (
        <>
            <HomeScreen />
            <NavigationTab />
        </>
    )
}

export default connect(mapStateToProps)(AppNavigator);