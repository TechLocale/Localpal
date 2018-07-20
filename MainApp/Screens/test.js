import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView, FlatList, TouchableOpacity, Icon } from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  // ADD YOUR FIREBASE CREDENTIALS
  apiKey: "AIzaSyDY79TBCvNwjDHbx83BKI50dsoyBM-lcHA",
    authDomain: "mainproject-47543.firebaseapp.com",
    databaseURL: "https://mainproject-47543.firebaseio.com",
    projectId: "mainproject-47543",
    storageBucket: "mainproject-47543.appspot.com",
    messagingSenderId: "492143575979"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var data = []

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      listViewData: data,
      newContact: "",
      name: []
    }

  }

  componentDidMount() {

    var that = this

    firebase.database().ref('/UsersData').on('child_added', function (data) {

      var newData = [...that.state.listViewData]
      newData.push(data.val())
      that.setState({ listViewData: newData,
    
        name:data.val().name })
        console.log(data.val());
    })

  }

  renderItem = ({item}) =>{
    return (
      <TouchableOpacity style={{ flex:1, flexDirection: 'row', marginBottom:3, marginTop:0}}>
         
         <View style={{ flex:1, justifyContent:'center'}}>
            <Text style={{ fontSize: 18 , color:'green' , marginLeft: 5}}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16 , color: 'red'}}>
              {item.email}
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 16 , backgroundColor: 'green', padding:5,marginRight:5, marginLeft:5}}>
              {item.phonenumber}
            </Text>
            <Text style={{ fontSize: 16 , backgroundColor: 'red', padding:5,marginRight:5, marginLeft:5}}>
              {item.password}
            </Text>
            </View>
         </View>
    </TouchableOpacity>
    )
  }
  renderSeparater = () => {
    return (
      <View style={{ height:1 , width:'100%' , backgroundColor: 'black'}}>

      </View>
    )
  }

  render() {
    return (
      this.state.isLoading
      ?
      <View style={{ flex:1, justifyContent:'center' , alignItems:'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />

      </View>
      :
      <View style={styles.container}>
      <FlatList
        data={this.state.listViewData}
        renderItem={this.renderItem}
        keyExtractor={( item ,index)=> index}
        ItemSeparateComponent={this.renderSeparater}   //Adds Dividers to the Flatlist
      />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});