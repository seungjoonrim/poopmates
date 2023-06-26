import axios from 'axios';

import {
  BASE_URL
} from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

async function getChats(id) {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for users:', error);
  }
}

export {
  getChats,
}
