import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';

class BottomTab extends React.Component{
  render(){
    return(
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
        onPress={()=>this.props.navigation.navigate('HomeScreen')}>
            <View>
                <Icon name='event' />
                <Text>PLANNER</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.tab}
         onPress={()=>this.props.navigation.navigate('HomeScreen')}>
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
          style={{backgroundColor:'#ffff'}}
           onPress={()=>this.props.navigation.navigate('HomeScreen')}>
               <View>
                   <Icon name='home' />
                   <Text>ACCOUNT</Text>
               </View>
           </TouchableOpacity>
      </View>
    );
  }
}
export default BottomTab;

const styles = StyleSheet.create({
  Bottom: {
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  tab: {

  },
});
