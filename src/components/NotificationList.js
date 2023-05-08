import React, {
  useContext,
} from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import Button from './Button';
import StatusIndicator from './StatusIndicator';
import globalStyles from '../styles/globalStyles';
import { UserContext } from '../context/UserContext';

const NotificationListItem = ({ notification }) => {
  const { user, acceptFriend } = useContext(UserContext);

  return (
    <View style={styles.item}>
      <View style={styles.username}>
        <Text style={globalStyles.text}>{notification.slice(0,3)}</Text>
      </View>
      <Button title="Accept mate" size="sm" onPress={() => acceptFriend(user._id, notification)}/>
    </View>
  )
};

const NotificationList = ({ notifications }) => (
  <FlatList
    data={notifications}
    renderItem={({ item }) => <NotificationListItem notification={item} />}
    keyExtractor={(item) => item}
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
});

export default NotificationList;
