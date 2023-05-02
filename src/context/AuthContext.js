import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  checkToken,
  loginUser,
  registerUser,
} from '../services/authService';

const AuthContext = createContext({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  async function login(email, password, nav) {
    try {
      let userData;
      if (email && password) {
        userData = await loginUser(email, password, null);
      } else {
        const token = await AsyncStorage.getItem('jwt');
        userData = await loginUser(null, null, token);
      }
      await AsyncStorage.setItem('jwt', userData.token);
      const stringified = JSON.stringify(userData.userData)
      const parsed = JSON.parse(stringified);
      setUserId(parsed._id);
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
      setUserId(null);
      setIsLoggedOut(true);
      nav.navigate('Login');
    } catch (e) {}
  };

  return (
    <AuthContext.Provider value={{ userId, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider
}
