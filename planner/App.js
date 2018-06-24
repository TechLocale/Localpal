import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, SearchBar, ButtonGroup  } from 'react-native-elements'
import { Container, Header, Content, Button} from 'native-base';


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
        <Container>
        <Header />
        <Content>
          <Button light><Text> Light </Text></Button>
          <Button primary><Text> Primary </Text></Button>
          <Button success><Text> Success </Text></Button>
          <Button info><Text> Info </Text></Button>
          <Button warning><Text> Warning </Text></Button>
          <Button danger><Text> Danger </Text></Button>
          <Button dark><Text> Dark </Text></Button>
        </Content>
      </Container>
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
