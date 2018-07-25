import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


import homeScreen from './component/homeScreen';
import DetailProduct from './component/DetailProduct';


class MyApp extends React.Component {
  render() {
    return (
      <Navigational />

    )
  }
}

const Navigational = createStackNavigator(
  {
    Home: homeScreen,
    Detail: DetailProduct,


  },
  {
    initialRouteName: 'Home'
  }
)

AppRegistry.registerComponent('yes', () => MyApp);