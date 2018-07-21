import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import NewsFeed from './NewsFeed';
import TopBar from './TopBar';
import PlannerStack from './Planner/PlannerScreen';
import BoringScreen from './BoringScreen';
import AccountScreen from './AccountScreen';


class AppTabNavigator extends Component {


    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}
export default AppTabNavigator;
const HomeScreenTabNavigator = new createMaterialBottomTabNavigator({
    NewsFeed: {
        screen: NewsFeed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name="ios-albums-outline" size={24} />
            )
        }
    },
    MessageScreen: {
        screen: TopBar,
        navigationOptions: {
            tabBarLabel: 'Messages',
            tabBarIcon: () => (
                <Ionicons name="md-compass" size={24} />
            )
        }
    },
    PlannerStack: {
        screen: PlannerStack,
        navigationOptions: {
            tabBarLabel: 'Planner',
            tabBarIcon: () => (
                <Ionicons name="ios-apps-outline" size={24} />
            )
        }
    },
    BoringScreen: {
        screen: BoringScreen,
        navigationOptions: {
            tabBarLabel: 'Boring',
            tabBarIcon: () => (
                <Ionicons name="ios-add-outline" size={24} />
            )
        }
    },
    AccountScreen: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: () => (
                <Ionicons name="ios-contacts-outline" size={24} />
            )
        }
    }
  },
  {
  activeTintColor: 'white',
  inactiveTintColor: 'white',
  barStyle: { backgroundColor: '#33ADFF' },
})
