import {
    StyleSheet
} from "react-native";

import {  createStackNavigator } from 'react-navigation';

import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
}, 
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,  

    }
})


const AppDrawerNavigator = new createStackNavigator({
    HomeScreen: { screen: InnerStackNavigator },
}, 
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,  
    
        }
    })
    


export default AppDrawerNavigator;

