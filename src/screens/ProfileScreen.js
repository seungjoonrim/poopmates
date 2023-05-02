import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import globalStyles from '../styles/globalStyles';
import {
  getDifferenceUntilFutureTime
} from '../utils/utils';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  async function handleLogout() {
    try {
      logout(navigation);
    } catch (error) {

    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Profile</Text>
      <Text style={globalStyles.text}>Username: {user?.username}</Text>
      <Text style={globalStyles.text}>Email: {user?.email}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SetStatus')}>
        <Text style={globalStyles.text}>
          Pooping Status: {user?.isPooping ? 'Pooping' : 'Not Pooping'}
        </Text>
      </TouchableOpacity>
      {
        user?.isPooping ?
          <Text style={globalStyles.text}>
            Done pooping in: {user?.isPoopingExpiresAt ? getDifferenceUntilFutureTime(user.isPoopingExpiresAt, 'minutes') : ''} minutes
          </Text> :
          ''
      }
      <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
        <Text style={globalStyles.text}>Number of Friends: {user?.friends?.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
