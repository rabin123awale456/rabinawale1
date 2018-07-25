import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from'react-navigation';

 class App extends React.Component {
  render() {
    return (
      <Appstack />
    );
  }
}
 const Appstack= createStackNavigator({
   login:{
     screen:loginScreen
   }
 })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
