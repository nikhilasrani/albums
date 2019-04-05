/* eslint-disable prettier */
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//import a library to help create a component
//create a component

const App = () => <Header title={'Albums'} />;

//render it to the device

AppRegistry.registerComponent('albums', () => App);
