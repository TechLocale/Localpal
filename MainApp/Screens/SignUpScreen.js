import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert, TextInput, KeyboardAvoidingView} from 'react-native';

import firebase from '../firebase';

class SignUpScreen extends React.Component{
  constructor(props) {
     super(props);

     this.state = {
       email: '',
       password: '',
       rpassword: '',
       fname: '',
       mob: '',
       loading: false,

     };
   }

   onSignUp() {
     this.setState({ error: '', loading: true });
     var key =  firebase.database().ref('/UsersData').push().key
     const { email, password, rpassword, fname, mob } = this.state;
     if(this.state.password == this.state.rpassword){
       firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
               this.setState({ error: '', loading: false });
              firebase.database().ref('/UsersData').child(key).set(
                {
                 email : email,
                 password : password,
                 name :   fname,
                 phonenumber : mob,
                })
                Alert.alert('Credentials', `${email} + ${password} + ${rpassword} + ${fname} + ${mob}`);
                this.props.navigation.navigate('AccountScreen')
           },(error) =>{
             Alert.alert(error.message);
           }
           )
           .catch(() => {
               this.setState({ error: 'Authentication failed', loading: false });

           })
     }
   }

  render(){
    return(

      <KeyboardAvoidingView behavior ="padding" style={styles.container}>

        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Enter Your Email Id'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.rpassword}
          onChangeText={(rpassword) => this.setState({ rpassword })}
          placeholder={'Re-type Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.fname}
          onChangeText={(fname) => this.setState({ fname })}
          placeholder={'Full Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.mob}
          onChangeText={(mob) => this.setState({ mob })}
          placeholder={'Mobile Number'}
          keyboardType={'numeric'}
          style={styles.input}
        />

        <Button
          title={'SignUp'}
          style={styles.input}
          onPress={this.onSignUp.bind(this)}
          />
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpScreen;


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
