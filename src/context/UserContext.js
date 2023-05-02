import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getUser,
  updateUserStatus,
} from '../services/userService';

const UserContext = createContext({
  user: null,
  fetchUser: () => {},
  updateStatus: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function fetchUser(id) {
    try {} catch (err) {}
  };

  async function updateStatus(status, expiresAt) {
    try {
      const userData = await updateUserStatus(user, status, expiresAt);
      setUser(userData);
    } catch(e) {}
  }

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, updateStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserProvider
}
