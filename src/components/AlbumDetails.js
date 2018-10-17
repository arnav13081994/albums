import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetails = (props) => {
  return (
    <Card>


      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
             style={styles.thumbnailStyle}
             source={{ uri: props.album.thumbnail_image }}
           />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleContainerStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.artWorkimage}
           source={{ uri: props.album.image }}
          />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)} >
          Buy Now!
        </Button>
      </CardSection>


    </Card>
  );
};


const styles = {
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  titleContainerStyle: {
    fontSize: 20
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  artWorkimage: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetails;
