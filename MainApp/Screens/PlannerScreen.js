import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import {  SearchBar, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



class PlannerScreen extends React.Component{
  static navigationOptions = {
    headerTitle: 'Planner',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
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
                 source={require('../home.jpg')}/>
                 <Text>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../intrip.jpg')}/>
                 <Text>InTrip</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../gohome.jpg')}/>
                 <Text>Go Home</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.contain}>
        <Image style={{ width:'100%', height:'60%' , borderRadius:10,}}
             source={require('../home.jpg')}/>
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

export default PlannerScreen;

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
