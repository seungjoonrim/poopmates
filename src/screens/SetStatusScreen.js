import React, {
  useEffect,
  useContext,
  useState,
} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { UserContext } from '../context/UserContext';
import globalStyles from '../styles/globalStyles';

const SetStatusScreen = () => {
  const { user, updateStatus } = useContext(UserContext);

  async function toggleStatus() {
    const newStatus = !user.isPooping;

    // Calculate the new poopingStatusExpiresAt value
    const expiresIn = newStatus ? 5 * 60 * 1000 : 0; // 30 minutes in milliseconds
    const newExpiresAt = newStatus ? new Date(Date.now() + expiresIn) : null;

    try {
      await updateStatus(undefined, newStatus, newExpiresAt);
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Set Pooping Status</Text>
      <TouchableOpacity style={globalStyles.button} onPress={toggleStatus}>
        <Text style={globalStyles.buttonText}>{user.isPooping ? 'Stop Pooping' : 'Start Pooping'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetStatusScreen;
