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
        <View style={styles.Bottom}>
          <TouchableOpacity
          style={styles.tab}
          onPress={()=>this.props.navigation.navigate('HomeScreen')}>
               <View>
                   <Icon name='home' />
                   <Text>FEED</Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity
           style={styles.tab}
           onPress={()=>this.props.navigation.navigate('PlannerScreen')}>
                <View>
                    <Icon name='event' />
                    <Text>PLANNER</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.tab}
             onPress={()=>this.props.navigation.navigate('BoringScreen')}>
                 <View>
                     <Icon name='home' />
                     <Text>BORING</Text>
                 </View>
             </TouchableOpacity>
             <TouchableOpacity
             style={styles.tab}
              onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                  <View>
                      <Icon name='event' />
                      <Text>MESSAGE</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.tabA}
               onPress={()=>this.props.navigation.navigate('AccountScreen')}>
                 <View>
                     <Icon name='home' />
                     <Text>ACCOUNT</Text>
                 </View>
             </TouchableOpacity>
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
  Bottom: {
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  tab: {
    padding: 5,
  },
  tabA: {
    backgroundColor:'#ffff',
    padding: 5
  },
});
