import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getUser
} from '../services/api';

const UserContext = createContext({
  user: null,
  fetchUser: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function fetchUser(id) {
    try {} catch (err) {}
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserProvider
}
