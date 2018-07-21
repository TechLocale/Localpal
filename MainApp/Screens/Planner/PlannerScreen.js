import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import {  SearchBar, Tile } from 'react-native-elements';
import{createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import InTrip from './InTrip';
import GoHome from './GoHome';
import Create from './Create';
import GetPal from './GetPal';

class PlannerScreen extends React.Component{
  static navigationOptions = {
       header: null
   }
render(){
    return(
      <View style={styles.container}>
        <View>
        <SearchBar
         lightTheme
          clearIcon={{ color: 'white' }}
          searchIcon={false} // You could have passed `null` too
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder='Type Here...' />

        </View>
        <View>
        <Button
        onPress={() =>
        this.props.navigation.navigate('Create')}
        title='Create Trip'
        />
        </View>
        <View style={styles.ButtonGroup}>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../../img/home.jpg')}/>
                 <Text>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../../img/intrip.jpg')}/>
                 <Text>InTrip</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../../img/gohome.jpg')}/>
                 <Text>Go Home</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.contain}>
        <Image style={{ width:'100%', height:'60%' , borderRadius:10,}}
             source={require('../../img/home.jpg')}/>
          <Button
          title='Get A Local'
          onPress={() =>
          this.props.navigation.navigate('GetPal')}
          style={styles.input}/>
        </View>
      </View>

    );
  }
}



export default PlannerStack = new createStackNavigator({
  PlannerScreen:{ screen: PlannerScreen},
  InTrip: { screen: InTrip},
  GoHome: { screen: GoHome},
  Create: { screen: Create},
  GetPal: { screen:GetPal},
  Home: {screen: Home},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  contain: {
    flex: 1,
    backgroundColor: '#fff',

  },
  ButtonGroup:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
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
