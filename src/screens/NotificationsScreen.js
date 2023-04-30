import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles/globalStyles';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    // Implement fetch notifications logic here, e.g., call API to get notifications
  };

  const acceptFriendRequest = async (notificationId) => {
    // Implement accept friend request logic here, e.g., call API to accept a friend request
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const fetchedNotifications = await getNotifications();
      setNotifications(fetchedNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.text}</Text>
            {item.type === 'friendRequest' && (
              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() => acceptFriendRequest(item._id)}
              >
                <Text style={styles.acceptButtonText}>Accept</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationText: {
    fontSize: 18,
  },
  acceptButton: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NotificationsScreen;
