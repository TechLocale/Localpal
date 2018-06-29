import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

class PlannerScreen extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
      <View style={{marginTop: StatusBar.currentHeight}}>
        <Text>Planner Screen</Text>

        <Button
        onPress={() =>
        this.props.navigation.navigate('HomeScreen')}
        title="HOME" />
      </View>
    );
  }
}

export default PlannerScreen;
