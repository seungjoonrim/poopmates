import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = ({ title, onPress, style, size, bold }) => {
  const width = styles[size];
  const weight = bold ? styles.boldWeight : styles.regularWeight;

  return (
    <Pressable style={({pressed}) => ({
      width: width.width,
      backgroundColor: 'orange',
      borderRadius: 6,
    })}>
      <TouchableOpacity onPress={onPress}
                        style={[styles.button, width, style]}>
        <Text style={[styles.buttonText, weight]}>{title}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  boldWeight: {
    fontWeight: 'bold',
  },
  regularWeight: {
    fontWeight: 'regular',
  },
  sm: {
    width: 100
  },
  md: {
    width: 200
  },
  lg: {
    width: '100%'
  },
});

export default Button;
