import React from 'react';
import { View, StyleSheet } from 'react-native';

import { determineStatus } from '../utils/utils';

const StatusIndicator = ({user}) => {
  const isPooping = determineStatus(user);
  const dotColor = isPooping ? styles.greenDot : styles.grayDot;

  return <View style={[styles.dot, dotColor]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  greenDot: {
    backgroundColor: 'green',
  },
  grayDot: {
    backgroundColor: 'gray',
  },
});

export default StatusIndicator;
