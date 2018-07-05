import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import AccountScreen from './Screens/AccountScreen';
import PlannerScreen from './Screens/PlannerScreen';
  import Home from './Screens/Planner/Home';
  import InTrip from './Screens/Planner/InTrip';
  import GoHome from './Screens/Planner/GoHome';
  import Create from './Screens/Create';

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
  PlannerScreen: { screen: PlannerScreen},
    Home: { screen: Home},
    InTrip: { screen: InTrip},
    GoHome: { screen: GoHome},
    Create: { screen: Create},

},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
