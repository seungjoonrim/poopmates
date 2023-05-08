import React, {
  useEffect,
  useContext,
  useState,
} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Button from '../components/Button';
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
      <Button title={user.isPooping ? 'Stop Pooping' : 'Start Pooping'}
              size="lg"
              bold={true}
              onPress={toggleStatus}/>
    </View>
  );
};

export default SetStatusScreen;
