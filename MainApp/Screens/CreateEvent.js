import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert, TextInput, KeyboardAvoidingView} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { CheckBox } from 'react-native-elements';

import firebase from '../firebase';

class CreateEvent extends React.Component{

  constructor(props) {
     super(props);

     this.state = {
       Ename: '',
       Location: '',
       Cost: '',
       start: "2016-05-15",
       Strength: '',
       desc: '',
       first: '',
       checked:'',
       loading: false,
       

     };
   }

   onCreate() {
     this.setState({ error: '', loading: true });
     var key =  firebase.database().ref('/EventData').push().key
     const { Ename, Location, Cost, start, end, Strength, desc, first, checked } = this.state;
     if(Ename){

               this.setState({ error: '', loading: false });
              firebase.database().ref('/EventData').child(key).set(
                {
                 Ename : Ename,
                 Location : Location,
                 Cost: Cost,
                 Eventdate : start,
                 Strength: Strength,
                 Description: desc,
                 first: first
                })
                Alert.alert('Trip', `${Ename} + ${Location} + ${Cost} + ${start} + ${end} + ${Strength} + ${checked}`);
                this.props.navigation.navigate('AccountScreen')
              }
     }


  render(){
    return(

      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>

        <TextInput
          value={this.state.Ename}
          onChangeText={(Ename) => this.setState({ Ename })}
          placeholder={'Event Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.Location}
          onChangeText={(Location) => this.setState({ Location })}
          placeholder={'Location'}
          style={styles.input}
        />
        <TextInput
          value={this.state.Cost}
          onChangeText={(Cost) => this.setState({ Cost })}
          placeholder={'Cost'}
          keyboardType={'numeric'}
          style={styles.input}
        />
        <TextInput
          value={this.state.Strength}
          onChangeText={(Strength) => this.setState({Strength})}
          placeholder={'Event Strength'}
          keyboardType={'numeric'}
          style={styles.input}
        />
        <TextInput
          value={this.state.desc}
          onChangeText={(desc) => this.setState({ desc })}
          placeholder={'Description'}
          multiline = {true}
         numberOfLines = {4}
          style={styles.inputA}
        />
        <View>
          <Text style={{ fontWeight: 'bold'}}>Date of event</Text>
        </View>
        <View style={styles.dinput}>

          <DatePicker
            style={styles.date}
            date={this.state.start}
            mode="date"
            placeholder="When will you reach ?"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            // customStyles={{
            //   dateIcon: {
            //     position: 'absolute',
            //     left: 0,
            //     top: 4,
            //     marginLeft: 0
            //   },
            //   dateInput: {
            //     marginLeft: 36
            //   }
            // }}
            onDateChange={(start) => {this.setState({start: start})}}
          />

        </View>
        <View style={styles.check}>
          <CheckBox
            title="It's my first visit"
            containerStyle={{backgroundColor: '#ecf0f1', padding: 5}}
            checked={this.state.first}
            onPress={() => this.setState({ first: !this.state.first })}
          />
          <CheckBox
            title="Make it rain!"
            containerStyle={{backgroundColor: '#ecf0f1', padding: 5}}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
        <Button
          title={'Create Event'}
          style={styles.input}
          onPress={this.onCreate.bind(this)}
          />
      </KeyboardAvoidingView>
    );
  }
}

export default CreateEvent;


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
 inputA: {
   borderRadius: 9,
   width: 300,
   height: 88,
   padding: 10,
   borderWidth: 1,
   borderColor: 'black',
   marginBottom: 10,
 },
 date: {
   width: 150,
   borderRadius: 20,
   padding: 10,
 },
 dinput:{
   flexDirection: 'row',
 },
 ckeck: {
   flexDirection: 'row',
 },
});
