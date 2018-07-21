import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';

  import CreateEvent from './Screens/CreateEvent';
  import test from './Screens/test';

import DrawerNavigator from './Screens/DrawerNavigator';


export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = new createStackNavigator({
  // test: { screen: test},
  LoginScreen: { screen: LoginScreen},
  SignUpScreen: { screen: SignUpScreen},


// testing 123
  CreateEvent: { screen: CreateEvent},

  DrawerNavigator: {screen: DrawerNavigator }
},
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
