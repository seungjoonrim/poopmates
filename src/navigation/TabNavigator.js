import React, {
  useEffect,
  useContext
} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import globalStyles from '../styles/globalStyles';

import ProfileScreen from '../screens/ProfileScreen';
import SetStatusScreen from '../screens/SetStatusScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FriendsScreen from '../screens/FriendsScreen';
import ChatsScreen from '../screens/ChatsScreen';

import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { setUser } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setUser(user);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Tab.Screen
        name="SetStatus"
        component={SetStatusScreen}
        options={{ title: 'Set Status' }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notifications' }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ title: 'Friends' }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{ title: 'Chats' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
