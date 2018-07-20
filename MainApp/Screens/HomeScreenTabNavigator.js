import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import NewsFeed from './NewsFeed';
import MessageScreen from './MessageScreen';
import PlannerScreen from './PlannerScreen';
import BoringScreen from './BoringScreen';
import AccountScreen from './AccountScreen';


export default class AppTabNavigator extends Component {


    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const HomeScreenTabNavigator = new createBottomTabNavigator({
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
        screen: MessageScreen,
        navigationOptions: {
            tabBarLabel: 'Messages',
            tabBarIcon: () => (
                <Ionicons name="md-compass" size={24} />
            )
        }
    },
    PlannerScreen: {
        screen: PlannerScreen,
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
                <Ionicons name="ios-contacts" size={24} />
            )
        }
    }
})
