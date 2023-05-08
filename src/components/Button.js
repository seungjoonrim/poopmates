import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Button = ({ title, onPress, style, size }) => {
  const width = styles[size];

  return (
    <Pressable style={({pressed}) => ({
      backgroundColor: 'orange',
    })}>
      <TouchableOpacity onPress={onPress}
                        style={[styles.button, width, style]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  sm: {
    width: 100
  },
  md: {
    width: 200
  },
  lg: {
    width: 300
  },
});

export default Button;
