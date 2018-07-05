import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Button,
  StatusBar,
} from 'react-native';
import { ImagePicker } from 'expo';
import { Avatar, Icon } from 'react-native-elements';

import firebase from '../firebase';

class AccountScreen extends React.Component{
  constructor(props) {
   super(props);

   this.state = { id: '' };
 }
 onChooseImagePress = async () => {
   const { id } = this.state;
   //let result = await ImagePicker.launchCameraAsync();
   let result = await ImagePicker.launchImageLibraryAsync();

   if (!result.cancelled) {
     this.uploadImage(result.uri, id)
       .then(() => {
         Alert.alert('Success');
       })
       .catch(error => {
         Alert.alert(error);
       });
   }
 };

 uploadImage = async (uri, imageName) => {
   const response = await fetch(uri);
   const blob = await response.blob();

   var ref = firebase
     .storage()
     .ref()
     .child('images/' + imageName);
   return ref.put(blob);
 };

 _onLongPressButton() {
   Alert.alert('You long-pressed the button!');
 }

  render(){
    return(
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.contain}>
            <Avatar
              small
              rounded
              overlayContainerStyle={{
                backgroundColor: 'skyblue',
              }}
              title="VIP"
              onPress={() => console.log('Works')}
              activeOpacity={0.7}
              containerStyle={{
                marginTop: 60,
                marginLeft: 0,
              }}
            />
            <Avatar
              large
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              onPress={() => console.log('Works')}
              onLongPress={this._onLongPressButton}
              activeOpacity={0.7}
            />
            <Avatar
              small
              rounded
              overlayContainerStyle={{ backgroundColor: 'skyblue' }}
              title="51"
              onPress={() => console.log('Works')}
              activeOpacity={1}
              containerStyle={{ marginTop: 60 }}
            />
          </View>
          <View style={styles.mid}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 18,
              }}>
              Username
            </Text>
            <Text>310</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>Followers </Text>
          </View>
        </View>
        <View>
          <Button
          onPress={() =>
          this.props.navigation.navigate('HomeScreen')}
          title="HOME" />
        </View>
      </View>

    );
  }
}
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  mid: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  contain: {

    flexDirection: 'row',
    justifyContent: 'center',
  },
});
