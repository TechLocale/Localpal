import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList , Image , ActivityIndicator , TouchableOpacity, ToastAndroid, StatusBar, Button} from 'react-native';
import { SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BoringScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Boring Screen',
    headerRight: (

    ),
  };
  constructor() {
    super()
      this.state = {
        dataSource: [],
        isLoading:true
      }
  }
  renderItem = ({item}) =>{
    return (
      <TouchableOpacity style={{ flex:1, flexDirection: 'row', marginBottom:3, marginTop:0}}
      onPress={() => ToastAndroid.show(item.book_title , ToastAndroid.SHORT)}>
         <Image style={{ width:80, height:80 , margin:5}}
              source={{uri: item.image}}/>
         <View style={{ flex:1, justifyContent:'center'}}>
            <Text style={{ fontSize: 18 , color:'green' , marginLeft: 5}}>
              {item.book_title}
            </Text>
            <Text style={{ fontSize: 16 , color: 'red'}}>
              {item.author}
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 16 , backgroundColor: 'green', padding:5,marginRight:5, marginLeft:5}}>
              {item.vacant}
            </Text>
            <Text style={{ fontSize: 16 , backgroundColor: 'red', padding:5,marginRight:5, marginLeft:5}}>
              {item.full}
            </Text>
            </View>
         </View>
    </TouchableOpacity>
    )
  }
  renderSeparater = () => {
    return (
      <View style={{ height:1 , width:'100%' , backgroundColor: 'black'}}>

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
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={( item ,index)=> index}
        ItemSeparateComponent={this.renderSeparater}   //Adds Dividers to the Flatlist
      />
      <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
      <View >
        <TouchableOpacity
            style={{
           borderWidth:1,
           borderColor:'#0000',
           alignItems:'center',
           justifyContent:'center',
           width:70,
           position: 'absolute',
           bottom: 0,
           right: 10,
           height:70,
           backgroundColor:'#F9725F',
           borderRadius:100,
        }}
        onPress={()=>this.props.navigation.navigate('CreateEvent')}>
          <Icon name="plus"  size={30} color="#ffff" />
        </TouchableOpacity>
      </View>
      </View>
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
