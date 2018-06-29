import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends React.Component{
  static navigationOptions = {
       header: null
   }
  render(){
    return(
      <View>
        <Text>This is Login Screen</Text>
        <Button
        onPress={() =>
        this.props.navigation.navigate('HomeScreen')}
        title="Go to the home screen" />
      </View>
    );
  }
}

export default LoginScreen;
