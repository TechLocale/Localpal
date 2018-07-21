import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';

  import CreateEvent from './Screens/CreateEvent';
  import test from './Screens/test';

import HomeScreenTabNavigator from './Screens/HomeScreenTabNavigator';

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = new createStackNavigator({

  BottomNavigator: { screen: HomeScreenTabNavigator},
  // test: { screen: test},
  LoginScreen: { screen: LoginScreen},
  SignUpScreen: { screen: SignUpScreen},

// testing 123
  CreateEvent: { screen: CreateEvent},
},
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
