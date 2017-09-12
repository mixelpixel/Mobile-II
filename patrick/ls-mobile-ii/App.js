import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import 'expo' // added this during set-up funk. Don't think I need it...

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {/* <Home />
        <SignIn />
        <SignUp />
        <Content /> */}
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
