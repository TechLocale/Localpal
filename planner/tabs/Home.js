import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, SearchBar } from 'react-native-elements'


export default class Home extends React.Component {
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
          showLoading
          platform="android"
          cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          placeholder='Search' />

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
});
