import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  loginUser,
  registerUser,
} from '../services/api';

const AuthContext = createContext({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  async function login(email, password, nav) {
    const userData = await loginUser(email, password);
    setIsLoggedOut(true);
    nav.navigate('TabNavigator');
  };

  async function register(username, email, password, nav) {
    const userData = await registerUser(username, email, password);
    nav.navigate('Login');
  };

  async function logout(nav) {
    await AsyncStorage.removeItem("user");
    setIsLoggedOut(true);
    nav.navigate('Login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider
}
