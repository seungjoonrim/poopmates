import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import globalStyles from '../styles/globalStyles';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [poopingStatus, setPoopingStatus] = useState(false);
  const [numFriends, setNumFriends] = useState(0);

  // Replace with actual API calls to get user data
  useEffect(() => {
    setUsername('JohnDoe');
    setEmail('john@example.com');
    setPoopingStatus(false);
    setNumFriends(5);
  }, []);

  async function handleLogout() {
    try {
      logout(navigation);
    } catch (error) {

    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Profile</Text>
      <Text style={globalStyles.text}>Username: {username}</Text>
      <Text style={globalStyles.text}>Email: {email}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SetStatus')}>
        <Text style={globalStyles.text}>
          Pooping Status: {poopingStatus ? 'Pooping' : 'Not Pooping'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
        <Text style={globalStyles.text}>Number of Friends: {numFriends}</Text>
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
