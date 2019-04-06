/* eslint-disable prettier */
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//import a library to help create a component
//create a component

const App = () => (
  <View style={{ flex: 1 }}>
    <Header title={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device

AppRegistry.registerComponent('albums', () => App);
