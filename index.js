// Import a library to help create a componenet

import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';
//Create a componenet

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
