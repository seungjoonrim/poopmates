import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getUser,
  patchUserStatus,
  postAcceptFriend,
  postRejectFriend,
  postRequestFriend,
} from '../services/userService';

const UserContext = createContext({
  user: null,
  getUser: () => {},
  updateStatus: () => {},
  requestFriend: () => {},
  acceptFriend: () => {},
  rejectFriend: () => {},
  removeFriend: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function initUser(id) {
    try {
      const userData = await getUser(id);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      const stringified = JSON.stringify(userData);
      const parsed = JSON.parse(stringified);
      return parsed;
    } catch (err) {}
  };

  async function updateStatus(u, status, expiresAt) {
    const usr = u ? u : user;
    try {
      const userData = await patchUserStatus(usr, status, expiresAt);
      setUser(userData);
    } catch(e) {}
  }

  async function requestFriend(userId, friendId) {
    try {
      const resp = await postRequestFriend(userId, friendId);
    } catch (err) {}
  }

  async function acceptFriend(userId, friendId) {
  }

  async function rejectFriend(userId, friendId) {
  }

  const providerValue = {
    user,
    updateStatus,
    setUser,
    initUser,
    requestFriend,
  }

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserProvider
}
