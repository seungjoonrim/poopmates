import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles/globalStyles';

const SearchScreen = () => {
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchUsers = async (username) => {
    // Implement search logic here, e.g., call API to search users by username
  };

  const sendFriendRequest = async (userId) => {
    // Implement friend request logic here, e.g., call API to send a friend request
  };

  const handleSearch = async () => {
    const results = await searchUsers(username);
    setSearchResults(results);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Search Users</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.username}>{item.username}</Text>
            <TouchableOpacity
              style={styles.friendRequestButton}
              onPress={() => sendFriendRequest(item._id)}
            >
              <Text style={styles.friendRequestButtonText}>Add Friend</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  searchButton: {
    backgroundColor: '#6200EE',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 18,
  },
  friendRequestButton: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  friendRequestButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SearchScreen;
