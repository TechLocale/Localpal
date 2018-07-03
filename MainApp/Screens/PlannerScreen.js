import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Header, SearchBar, ButtonGroup,  Tile  } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

class PlannerScreen extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }

  render(){
    return(
      <View style={styles.container}>
        <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Planner', style: { color: '#fff' } }}
          rightComponent={{ icon: 'message', color: '#fff' }}
        />
        </View>
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
          <Button
          onPress={() =>
          this.props.navigation.navigate('Home')}
          title="HOME"
          />
          <Button
          onPress={() =>
          this.props.navigation.navigate('InTrip')}
          title="InTrip"
          />
          <Button
          onPress={() =>
          this.props.navigation.navigate('GoHome')}
          title="GoHome"
          />
        </View>

        <View>
        <Tile
          imageSrc={{ require: './images/images.jpg' }}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="We'll keep you covered"
        />
        </View>
        <View style={styles.contain}>
          <Button
          title='Get A Pal'
          style={styles.input}/>
          <Button
          onPress={() =>
          this.props.navigation.navigate('HomeScreen')}
          title="HOME"
          style={styles.input}/>
        </View>
      </View>

    );
  }
}

export default PlannerScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
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
