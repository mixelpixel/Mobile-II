import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Content from './Content';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.navigateToContents = this.navigateToContents.bind(this);
  // }

  static navigationOptions = {
    title: 'You\'re HOME',
  }

  // navigateToContents() {
  //   this.props.navigation.navigate('Content');
  // }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'SignIn'}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }} />
        <Button
          title={'SignUp'}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }} />
        <Button
          title={'Are You Authorized To View This Content?'}
          onPress={() => {
            this.props.navigation.navigate('Content');
          }} />
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

const Routes = StackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Content: { screen: Content },
});

export default Routes;
