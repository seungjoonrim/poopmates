import axios from 'axios';

import {
  BASE_URL
} from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

async function loginUser(email, password, jwt) {
  try {
    const data = { email, password };
    const headers = {
      'Authorization': jwt,
      'Content-Type': 'application/json',
    }
    const response = await api.post('/login', data, { headers });

    if (response.data) {
      console.log('Logged in successfully');
      return response.data;
    }
  } catch (error) {
    console.error('Error in loginUser API call:', error);
    throw error;
  }
};

async function registerUser(username, email, password) {
  try {
    const response = await api.post('/register', { username, email, password });

    if (response.data) {
      console.log('Registered in successfully');
      return response.data;
    }
  } catch (error) {
    console.error('Error in registerUser API call:', error);
    throw error;
  }
};

// TODO: add this functionality to API
async function requestPasswordReset() {
  console.log("requestPasswordReset");
};


export {
  loginUser,
  registerUser,
  requestPasswordReset
}
