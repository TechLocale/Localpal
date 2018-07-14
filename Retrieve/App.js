import React from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, StatusBar,  } from 'react-native';


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

   firebase.initializeApp(firebaseConfig);


var data = []

export default class App extends React.Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      listViewData: data,
    };
  }

  componentDidMount() {
   var that = this

   firebase.database().ref('/UsersData').on( function (newData) {

     var newData = [that.state.listViewData]
     newData.push(data)
     that.setState({ listViewData: newData })

   })

 }
  render() {
    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
        renderRow={(data) => <Text>{data}</Text>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
