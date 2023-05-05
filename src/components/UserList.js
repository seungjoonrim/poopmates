import React, {
  useContext,
} from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import Button from './Button';
import StatusIndicator from './StatusIndicator';
import globalStyles from '../styles/globalStyles';
import { UserContext } from '../context/UserContext';

const UserListItem = ({ user }) => {
  const { user: mainUser, requestFriend } = useContext(UserContext);

  return (
    <View style={styles.item}>
      <View style={styles.username}>
        <Text style={globalStyles.text}>{user.username}</Text>
        <StatusIndicator user={user} />
      </View>
      <Button title="Add mate" size="sm" onPress={() => requestFriend(mainUser._id, user._id)}/>
    </View>
  )
};

const UserList = ({ users }) => (
  <FlatList
    data={users}
    renderItem={({ item }) => <UserListItem user={item} />}
    keyExtractor={(item) => item._id}
  />
);

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 16,
  },
  username: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default UserList;
