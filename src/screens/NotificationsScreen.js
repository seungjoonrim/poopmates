import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  View
} from 'react-native';

import { UserContext } from '../context/UserContext';
import NotificationList from '../components/NotificationList';
import globalStyles from '../styles/globalStyles';

const NotificationsScreen = () => {
  // const [notifications, setNotifications] = useState([]);
  const { user } = useContext(UserContext);

  // const getNotifications = async () => {
  //   // Implement fetch notifications logic here, e.g., call API to get notifications
  // };

  useEffect(() => {
  }, [user]);

  return (
    <View style={globalStyles.container}>
      <NotificationList notifications={user.friendRequests} />
    </View>
  );
};

// TODO: make a 'Notification' entity in the db and refactor this
// For now, the list of notifications is just the id of friend requests

export default NotificationsScreen;
