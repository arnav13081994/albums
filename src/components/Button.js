import React from 'react';
import { TouchableOpacity, Text } from 'react-native';



const Button = (props) => {

  return (
    <TouchableOpacity style={styles.buttonStyle}
      onPress={props.onPress}
      >
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};



export default Button;
