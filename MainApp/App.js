import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsFeed from './Screens/NewsFeed';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import AccountScreen from './Screens/AccountScreen';
import BoringScreen from './Screens/BoringScreen';
  import CreateEvent from './Screens/CreateEvent';
import PlannerScreen from './Screens/PlannerScreen';
  import Home from './Screens/Planner/Home';
  import InTrip from './Screens/Planner/InTrip';
  import GoHome from './Screens/Planner/GoHome';
  import Create from './Screens/Create';
  import GetPal from './Screens/GetPal';


export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = new createStackNavigator({


  NewsFeed: { screen: NewsFeed},
  LoginScreen: { screen: LoginScreen},
  SignUpScreen: { screen: SignUpScreen},
  AccountScreen: { screen: AccountScreen},

  PlannerScreen: { screen: PlannerScreen},
  InTrip: { screen: InTrip},
  GoHome: { screen: GoHome},
  Create: { screen: Create},
  GetPal: { screen:GetPal},
  Home: {screen: Home},

  BoringScreen: { screen: BoringScreen},
  CreateEvent: { screen: CreateEvent},
},
{
    headerMode: 'screen',
    navigationOptions: {
        headerVisible: true,
        headerStyle: { backgroundColor: '#33ADFF' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: '#fff',


    }
})
