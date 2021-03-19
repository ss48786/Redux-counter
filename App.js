

import React, {Component} from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
  
} from 'react-native';
import store from'./src/store'

import Counter from './src/Counter';



export default class App extends Component{
  


  render()
{
  return(
   
      <Counter/>
    

  );
}
}


