import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  fetchUser,
  updateUserStatus,
} from '../services/userService';

const UserContext = createContext({
  user: null,
  fetchUser: () => {},
  updateStatus: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function initUser(id) {
    try {
      const userData = await fetchUser(id);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      const stringified = JSON.stringify(userData);
      const parsed = JSON.parse(stringified);
      return parsed;
    } catch (err) {}
  };

  async function updateStatus(u, status, expiresAt) {
    const usr = u ? u : user;
    try {
      const userData = await updateUserStatus(usr, status, expiresAt);
      setUser(userData);
    } catch(e) {}
  }

  return (
    <UserContext.Provider value={{ user, updateStatus, setUser, initUser }}>
      {children}
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserProvider
}
