import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import globalStyles from '../styles/globalStyles';

const UserListItem = ({ user }) => (
  <View style={styles.item}>
    <Text style={globalStyles.text}>{user.username}</Text>
  </View>
);

const UserList = ({ users }) => (
  <FlatList
    data={users}
    renderItem={({ item }) => <UserListItem user={item} />}
    keyExtractor={(item) => item._id}
  />
);

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 16,
  }
});

export default UserList;
