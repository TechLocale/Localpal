import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert, TextInput} from 'react-native';


class LoginScreen extends React.Component{
  constructor(props) {
     super(props);

     this.state = {
       username: '',
       password: '',
     };
   }

   onLogin() {
     const { username, password } = this.state;

     Alert.alert('Credentials', `${username} + ${password}`);
     this.props.navigation.navigate('HomeScreen')
   }

   onSignUp() {
     this.props.navigation.navigate('SignUpScreen')
   }

   render() {
     return (
       <View style={styles.container}>
         <TextInput
           value={this.state.username}
           onChangeText={(username) => this.setState({ username })}
           placeholder={'Username'}
           style={styles.input}
         />
         <TextInput
           value={this.state.password}
           onChangeText={(password) => this.setState({ password })}
           placeholder={'Password'}
           secureTextEntry={true}
           style={styles.input}
         />

         <Button
           title={'Login'}
           style={styles.input}
           onPress={this.onLogin.bind(this)}
         />
         <Button
           title={'New User? SignUp'}
           style={styles.input}
           onPress={this.onSignUp.bind(this)}
         />
       </View>
     );
   }
 }

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    borderRadius: 9,
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
