import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList , Image , ActivityIndicator , Button, TouchableOpacity, ToastAndroid, StatusBar, ScrollView} from 'react-native';
import { SearchBar, Card, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewsFeed extends React.Component {
  static navigationOptions = {
    headerTitle: 'News Feed',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  constructor() {
    super()
      this.state = {
        dataSource: [],
        isLoading:true
      }
  }

  ongo(){

  }
  renderItem = ({item, i}) =>{
    return (
      <View style={{ flex:1, marginBottom:3, marginTop:0}}>
        <View>
          <ListItem
          key={i}
          roundAvatar
          avatar={{uri:item.image}}
          />
          <Image style={{ width:'100%', height:400}}
              source={{uri: item.image}}/>
            <TouchableOpacity>
              <View style={{margin:15}}>
                <Text>
                {item.author}
                </Text>
                <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
                </Text>
              </View>
            </TouchableOpacity>
        </View>
    </View>
    )
  }
  renderSeparater = () => {
    return (
      <View style={{ height:3 , width:'100%' , backgroundColor: 'black'}}>

      </View>
    )
  }
  componentDidMount () {
    const url= 'https://www.jasonbase.com/things/akzb.json'
    fetch(url)
     .then((response) => response.json())
     .then((responseJson) => {
          this.setState({
            dataSource: responseJson.book_array,
            isLoading: false
          })
     })
     .catch((error) => {
         console.log(error)
     })
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
      <View>
      <SearchBar
       lightTheme
        clearIcon={{ color: 'white' }}
        searchIcon={false} // You could have passed `null` too
        // onChangeText={someMethod}
        // onClear={someMethod}
        placeholder='Type Here...' />
      </View>
      <View >
      <ScrollView horizontal={true} >
        <View>
          <Button
            title='Music'
            style={{width: 300}}
            onPress={this.ongo.bind(this)}
          />
          <Button
            title='Travel'
            onPress={this.ongo.bind(this)}
          />
          <Button
            title='Food'
            onPress={this.ongo.bind(this)}
          />
          <Button
            title='Photography'
            onPress={this.ongo.bind(this)}
          />
          <Button
            title='Famous'
            onPress={this.ongo.bind(this)}
          />
        </View>
      </ScrollView>
      </View>
      <FlatList
        data={this.state.dataSource}
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
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',

  },
});
