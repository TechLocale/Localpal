import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';


class GoHome extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
      <View style={{marginTop: StatusBar.currentHeight}}>
        <Text>GoHome</Text>

        <Button
        onPress={() =>
        this.props.navigation.navigate('HomeScreen')}
        title="HOME" />
      </View>
    );
  }
}

export default GoHome;
