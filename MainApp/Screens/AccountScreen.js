import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Button,
  StatusBar,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
} from 'react-native';
import { ImagePicker } from 'expo';
import { Avatar } from 'react-native-elements';
import ImageElement from '../ImageElement';
import Icon from 'react-native-vector-icons/FontAwesome';



class AccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      modalVisible: false,
      modalImage: require('../Img_1.jpg'),
      images: [
        require('../Img_1.jpg'),
        require('../Img_2.jpg'),
        require('../Img_3.jpg'),
        require('../Img_4.jpg'),
        require('../Img_5.jpg'),
        require('../Img_6.jpg'),
      ],
    };
  }

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }
  getImage() {
    return this.state.modelImages;
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => {
            this.setModalVisible(true, key);
          }}>
          <View style={styles.imagewrap}>
            <ImageElement imgsource={val} />
          </View>
        </TouchableWithoutFeedback>
      );
    });
    return (
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
        <View style={styles.grid}>
          <Modal
            style={styles.modal}
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>
            <View style={styles.modal}>
              <Text
                style={styles.text}
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                Close
              </Text>
              <ImageElement imgsource={this.state.modalImage} />
            </View>
          </Modal>
          {images}
        </View>
        <View style={styles.Bottom}>
            <TouchableOpacity
            style={styles.tab}
            onPress={()=>this.props.navigation.navigate('NewsFeed')}>
             <View>
                 <Icon  size={30} name='feed' />

             </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tab}
              onPress={()=>this.props.navigation.navigate('PlannerScreen')}>
              <View>
                  <Icon size={30} name='paper-plane' />

              </View>
              </TouchableOpacity>
            <TouchableOpacity
            style={styles.tab}
           onPress={()=>this.props.navigation.navigate('BoringScreen')}>
               <View>
                   <Icon size={30} center name='check' />

               </View>
           </TouchableOpacity>
           <TouchableOpacity
            style={styles.tab}
            onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                <View>
                    <Icon size={30} name='list' />

                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.tabA}
             onPress={()=>this.props.navigation.navigate('AccountScreen')}>
                 <View>
                     <Icon size={30} name='user' />

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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  alignItems: 'center',
},
tabA: {
  backgroundColor:'#ffff',
  alignItems: 'center',
  padding: 15,
},
  grid: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: Dimensions.get('window').height / 5 - 12, //For dynamic Height
    width: Dimensions.get('window').width / 2 - 4, //For dynamic Widtht
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  text: {
    color: '#fff',
  },
});
