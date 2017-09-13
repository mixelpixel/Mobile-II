import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  static navigationOptions = {
    title: 'Content Page'
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => { // retrieve the token from "localStorage"
    axios.get('https://mobile-server-ii.herokuapp.com/users', {
      headers: {
        authorization: token, // attach the token as a header
      }
    }).then((response) => {
      // Update state in here
      this.setState({ users: response.data });
    });
  })
 }

 render() {
  return (
    <View>
      <Image
        source={{ uri: 'https://media.tenor.com/images/7f7f2882899755a705a2953b6fcfc263/tenor.gif' }}
        style={{ height: height, width: width }}
        >
        <FlatList
          style={{ opacity: .8 }}
          data={this.state.users}
          renderItem={({item}) => <Text>{ item.email }</Text>}
          keyExtractor= { item => item._id }
        />
      </Image>
    </View>
  );
 }
}
