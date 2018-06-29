import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import AccountScreen from './Screens/AccountScreen';

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen},
  HomeScreen: { screen: HomeScreen},
  SignUpScreen: { screen: SignUpScreen},
  AccountScreen: { screen: AccountScreen},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
