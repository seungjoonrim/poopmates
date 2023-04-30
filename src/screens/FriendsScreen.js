import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles/globalStyles';

const FriendsScreen = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    // Implement fetch friends logic here, e.g., call API to get friends
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
      <FlatList
        data={friends}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.friendStatus}>{item.status}</Text>
            {item.status === 'pooping' && (
              <TouchableOpacity
                style={styles.chatButton}
                onPress={() => requestChat(item._id)}
              >
                <Text style={styles.chatButtonText}>Chat</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
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
