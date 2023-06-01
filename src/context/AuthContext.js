import React, {
  createContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  postLogin,
  postRegisterUser,
} from '../services/authService';

const AuthContext = createContext({
  userId: null,
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
        userData = await postLogin(email, password, null);
      } else {
        const token = await AsyncStorage.getItem('jwt');
        userData = await postLogin(null, null, token);
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
      const userData = await postRegisterUser(username, email, password);
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
