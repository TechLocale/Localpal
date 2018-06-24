import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, SearchBar, ButtonGroup, Button  } from 'react-native-elements'

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
        <ButtonGroup
          selectedBackgroundColor="pink"
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          containerBorderRadius={25}
          buttons={['Home', 'Arrival','Departure']}
          containerStyle={{height: 30}} />
        </View>
        <View style={styles.contain}>
          <Button
          raised
          icon={{name: 'cached'}}
          title='jo man kare likho'
          backgroundColor= '#52A0EC'/>
          <Button
          raised
          icon={{name: 'cached'}}
          title='Icon anviye daala '
          backgroundColor= '#52A0EC' />
          <Button
          raised
          icon={{name: 'cached'}}
          title='Backend ka kuch '
          backgroundColor= '#52A0EC' />
          <Button
          raised
          icon={{name: 'cached'}}
          title='dhundhne mein kho gaya tha'
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
    justifyContent: 'space-evenly',
  },
});
