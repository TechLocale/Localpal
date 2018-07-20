import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity, Button } from 'react-native';
import {
  Avatar,
  ListItem,
  Divider,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const user = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   {
    name: 'Afdfsdg',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'fgtshh',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'fdgfshdtj',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'fasdgsfhdhj',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'Afddfhgjsf tshst',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'Afstrh dfhdhjf',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'hj rjsrjsha ',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'fwg hjjghgbz',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'fsaf gsfhshgh',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'Amy Farhdsg grhea',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'Amy  ggr g Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
   {
    name: 'Amygsg hghh  Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
]


export default class Example extends React.Component {
  static navigationOptions = {
    headerTitle: 'Message/Notification',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView  style ={{flex : 2}}>
        {
            user.map((l, i) => (
            <ListItem
               key={i}
               avatar={{uri:l.avtar_url}}
               title={l.name}
               subtitle={l.subtitle}
            />
          ))
        }
        </ScrollView>
      </View>
    </View>
    );
  }
}

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
  Bottom: {
    backgroundColor:'#ecf0f1',
  marginBottom: 0,
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-evenly',
  position: 'absolute',
  bottom:0,
  width: '100%',
  },
  tab: {
    padding: 5,
  },
  tabA: {
    backgroundColor:'#ffff',
    padding: 10,
  },
});
