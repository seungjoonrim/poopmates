import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import FriendList from '../components/FriendList';
import globalStyles from '../styles/globalStyles';

import { UserContext } from '../context/UserContext';

import {
  getUser,
} from '../services/userService';

const FriendsScreen = () => {
  const [friends, setFriends] = useState([]);
  const { user } = useContext(UserContext);

  const getFriends = async () => {
    const promises = [];
    for (const i in user.friends) {
      promises.push(getUser(user.friends[i]));
    }

    const resp = await Promise.all(promises);
    return resp;
  };

  const requestChat = async (friendId) => {
    // Implement request chat logic here, e.g., call API to request chat
  };

  useEffect(() => {
    const fetchFriends = async () => {
      const fetchedFriends = await getFriends();
      setFriends(fetchedFriends);
    };

    fetchFriends();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Friends</Text>
      <FriendList friends={friends} />
    </View>
  );
};

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendName: {
    fontSize: 18,
  },
  friendStatus: {
    fontSize: 16,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FriendsScreen;
