import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Iconicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';


const BottomTabNavigator = new TabNavigator({

  LoginScreen: {
    screen: LoginScreen,
  navigationOptions: {
    tabBarLabel: 'Login',
    tabBarIcon: () => {
      <Iconicons name= "md-compass" size={24} />
    }
  }},
  HomeScreen: { screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: () => {
        <Iconicons name= "md-compass" size={24} />
      }
    }},

},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
export default BottomTabNavigator;
