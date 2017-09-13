import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  AsyncStorage,
  Image,
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
import axios from 'axios';

// import Content from './Content';
// import SignIn from './SignIn';

const { width, height } = Dimensions.get('window');

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
  }

  static navigationOptions = {
    title: 'Sign Up'
  }

  signUp() {
    console.log('SignUp:',this.state);
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
        // this.props.navigate('Content');
        this.props.navigate('SignIn');
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.searchbar}>
        <Text>Enter your email address:</Text>
        {/* <Text>{this.state.error && this.state.error.length ? this.state.error : null}</Text> */}
        <TextInput
          style={styles.input}
          placeholder={'email'}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email} />
        <Text>Enter your password:</Text>
        <TextInput
          style={styles.input}
          placeholder={'password'}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true} />
        <TextInput
          style={styles.input}
          placeholder={'confirm password'}
          onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
          value={this.state.passwordConfirm}
          secureTextEntry={true} />
        <Text>{this.state.password === this.state.passwordConfirm ? 'Your password matches!' : 'Please confirm password'}</Text>
        <Button
          title={'Press here to Sign Up!'}
          onPress={this.signUp}
        />
        <Image
          source={{ uri: 'http://mylittlepony.eaglemoss.com/Content/images/bpony.png' }}
          style={{ height: height / 2, width: width }} />
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
    borderRadius: 10,
    marginLeft: 10,
    // marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    width: width * .85,
    padding: 2  ,
  },
});

// const Routes = StackNavigator({
//   SignUp: { screen: SignUp },
//   Content: { screen: Content },
// });
//
// export default Routes;
