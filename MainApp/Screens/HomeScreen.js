import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';


class HomeScreen extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
      <View style={{marginTop: StatusBar.currentHeight}}>
        <Text>SignUp Screen</Text>
        <Button
        onPress={() =>
        this.props.navigation.navigate('HomeScreen')}
        title="HOME" />
        <Button
        onPress={() =>
        this.props.navigation.navigate('PlannerScreen')}
        title="PLANNER" />
      </View>
    );
  }
}

export default HomeScreen;
