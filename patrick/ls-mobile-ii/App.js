import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Content from './components/content';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is from the App container</Text>
        <Home />
        <SignIn />
        <SignUp />
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
