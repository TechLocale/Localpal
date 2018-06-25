import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, SearchBar, ButtonGroup, Button, Tile  } from 'react-native-elements'
import imager from './images/images';


export default class App extends React.Component {
  state = {
    index: 0
  }

  updateIndex = (index) => {
    this.setState({index})
  }


  render() {
    return (
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
        small
        title='Create Trip'
        backgroundColor= '#EC6552'
        buttonStyle={{borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0, paddingTop: 5}}/>
        </View>
        <View>
        <ButtonGroup
          selectedBackgroundColor="pink"
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          containerBorderRadius={25}
          buttons={['Home', 'Arrival','Departure']}
          containerStyle={{height: 30}} />
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
          raised
          iconRight={{name: 'code'}}
          title='Get A Pal'
          backgroundColor= '#52A0EC'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contain: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
