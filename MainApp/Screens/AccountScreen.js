import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';


class AccountScreen extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
      <View style={{marginTop: StatusBar.currentHeight}}>
        <Text>Account Screen</Text>

        <Button
        onPress={() =>
        this.props.navigation.navigate('HomeScreen')}
        title="HOME" />
      </View>
    );
  }
}

export default AccountScreen;
