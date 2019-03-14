import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

import Header from './components/Header'
import Footernav from './components/Footernav'
import Nowplaying from './components/Function/Nowplaying'

export default class App extends React.Component {
  render() {
    return (
      
          <View style={{flex: 1}}>
          <ImageBackground source={require('./image/night.jpg')} style={{width: '100%', height: '100%'}}>

            <Header/>
            <Footernav/>
            </ImageBackground>
          </View>
       
    );
  }
}

