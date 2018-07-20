import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';

  import CreateEvent from './Screens/CreateEvent';
  import test from './Screens/test';
  import Home from './Screens/Planner/Home';
  import InTrip from './Screens/Planner/InTrip';
  import GoHome from './Screens/Planner/GoHome';
  import Create from './Screens/Create';
  import GetPal from './Screens/GetPal';
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

  InTrip: { screen: InTrip},
  GoHome: { screen: GoHome},
  Create: { screen: Create},
  GetPal: { screen:GetPal},
  Home: {screen: Home},

  CreateEvent: { screen: CreateEvent},

  DrawerNavigator: {screen: DrawerNavigator }
}, 
{
    navigationOptions: {
        headerVisible: false,
        headerStyle: { backgroundColor: '#33ADFF' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: '#fff',


    }
})
