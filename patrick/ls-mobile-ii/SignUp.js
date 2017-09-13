import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

import Content from './Content';

const { width, height } = Dimensions.get('window');


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    console.log(this.state);
    axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      if (response.data.code === 11000) {
        return this.setState({
          error: 'That email and password combo is no bueno for registering with our site, dood.',
        });
      }
      AsyncStorage.setItem('token', response.data.token).then(() => {
        this.props.navigate('Content');
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  // componentDidMount() {
  //   axios.post('https://mobile-server-ii.herokuapp.com/users').then((response) => {
  //     this.setState({
  //       posts: response,
  //     });
  //   });
  // }

  render() {
    return (
      <View style={styles.searchbar}>
        <Text>Enter your email address:</Text>
        <Text>{this.state.error && this.state.error.length ? this.state.error : null}</Text>
        <TextInput
          style={styles.input}
          // placeHolder={'poop on a stick?'}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email} />
        <Text>Enter your password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />
        <Button
          title={'Submit'}
          onPress={this.signUp}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    // flexDirection: 'row',
    paddingTop: 2,
  },
  input: {
    height: 25,
    borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'pink',
    borderRadius: 20,
    // marginLeft: 30,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    width: width * .85,
    padding: 8,
  },
});

const Routes = StackNavigator({
  SignUp: { screen: SignUp },
  Content: { screen: Content },
});

export default Routes;
