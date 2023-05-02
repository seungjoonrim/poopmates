import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import globalStyles from '../styles/globalStyles';

const SetStatusScreen = () => {
  const [status, setStatus] = useState(false);
  const [timer, setTimer] = useState(null);

  const toggleStatus = () => {
    setStatus(!status);

    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    if (!status) {
      setTimer(
        setTimeout(() => {
          setStatus(false);
        }, 5 * 60 * 1000)
      );
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Set Pooping Status</Text>
      <TouchableOpacity style={globalStyles.button} onPress={toggleStatus}>
        <Text style={globalStyles.buttonText}>{status ? 'Stop Pooping' : 'Start Pooping'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetStatusScreen;
