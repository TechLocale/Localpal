import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert, TextInput, KeyboardAvoidingView} from 'react-native';

import firebase from '../firebase';

class Create extends React.Component{
  constructor(props) {
     super(props);

     this.state = {
       dest: '',
       email: '',
       contact: '',
       start: '',
       end: '',
       loading: false,

     };
   }

   onSignUp() {
     this.setState({ error: '', loading: true });
     var key =  firebase.database().ref('/TripData').push().key
     const { dest, email, contact, start, end } = this.state;
     if(email){

               this.setState({ error: '', loading: false });
              firebase.database().ref('/TripData').child(key).set(
                {
                 dest : dest,
                 email : email,
                 contact: contact,
                 start : start,
                 end : end
                })
                Alert.alert('Trip', `${dest} + ${email} + ${contact} + ${start} + ${end}`);
                this.props.navigation.navigate('AccountScreen')
              }
     }


  render(){
    return(

      <KeyboardAvoidingView behavior ="padding" style={styles.container}>

        <TextInput
          value={this.state.dest}
          onChangeText={(dest) => this.setState({ dest })}
          placeholder={'Where are you going?'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Enter Your registered Email Id'}

          style={styles.input}
        />
        <TextInput
          value={this.state.contact}
          onChangeText={(contact) => this.setState({ contact })}
          placeholder={'Renter your mobile no.'}

          style={styles.input}
        />
        <TextInput
          value={this.state.start}
          onChangeText={(start) => this.setState({ start})}
          placeholder={'when will you reach here'}
          style={styles.input}
        />
        <TextInput
          value={this.state.mob}
          onChangeText={(end) => this.setState({ end })}
          placeholder={'when will you reach here'}
          
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

export default Create;


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
