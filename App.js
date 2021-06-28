import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './app/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
// import { TouchableOpacity } from 'react-native';
// import HomeScreen from './app/screens/HomeScreen';
// import { navigationRef, navigate } from './app/NavigationRoot';
// import Icons from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
