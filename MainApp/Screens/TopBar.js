import React, {Component} from 'react';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { createMaterialTopTabNavigator} from 'react-navigation'; // Version can be specified in package.json

import MessageScreen from './MessageScreen';
import SignUpScreen from './SignUpScreen';

class TopBar extends React.Component {


    render() {
        return (
          <MessageNavigator />
        );
    }
}
export default TopBar;

const MessageNavigator = new createMaterialTopTabNavigator(
  {
    Messages: { screen: MessageScreen },
    Notifications: { screen: SignUpScreen },  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Messages') {
          iconName = `ios-archive${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notifications') {
          iconName = `ios-alarm${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#ffff',
      inactiveTintColor: '#706666',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
