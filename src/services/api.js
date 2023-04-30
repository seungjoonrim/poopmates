import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.169:3030/api',
});

export const loginUser = async (email, password) => {
  console.log(email);
  console.log(password);
  try {
    const response = await api.post('/login', { email, password });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in loginUser API call:', error);
    throw error;
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await api.post('/register', { username, email, password });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in registerUser API call:', error);
    throw error;
  }
};

// TODO: add this functionality to API
export const requestPasswordReset = async () => {
  console.log("requestPasswordReset");
};
