import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList , Image , ActivityIndicator , Button, TouchableOpacity, ToastAndroid, StatusBar} from 'react-native';
import { SearchBar, Card, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewsFeed extends React.Component {
  constructor() {
    super()
      this.state = {
        dataSource: [],
        isLoading:true
      }
  }
  renderItem = ({item, i}) =>{
    return (
      <View style={{ flex:1, flexDirection: 'row', marginBottom:3, marginTop:0}}>
        <Card>
          <ListItem
          key={i}
          roundAvatar
          title={item.author}
          avatar={{uri:item.image}}
        />
          <Image style={{ width:'100%', height:400 , margin:5}}
              source={{uri: item.image}}/>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{padding:5}}>
                <Icon size={30} name='thumbs-up'/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding:5}}>
                <Icon size={30} name='comment'/>
              </TouchableOpacity>
          </View>
          <Button
            title='VIEW NOW'/>
        </Card>

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
    </View>
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
      <View style={styles.Bottom}>
          <TouchableOpacity
          style={styles.tabA}
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
          style={styles.tab}
           onPress={()=>this.props.navigation.navigate('AccountScreen')}>
               <View>
                   <Icon size={30} name='user' />

               </View>
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
  padding: 5
},
});
