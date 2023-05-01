import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  checkToken,
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
    try {
      const token = await AsyncStorage.getItem('jwt');
      const userData = await loginUser(email, password, token);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      await AsyncStorage.setItem('jwt', userData.token);
      console.log("userData: " + JSON.stringify(userData));
      setUser(userData.userData);
      setIsLoggedOut(false);
      nav.navigate('TabNavigator');
    } catch (err) {}
  };

  async function register(username, email, password, nav) {
    try {
      const userData = await registerUser(username, email, password);
      nav.navigate('Login');
    } catch (err) {}
  };

  async function logout(nav) {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('jwt');
      setUser(null);
      setIsLoggedOut(true);
      nav.navigate('Login');
    } catch (e) {}
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
