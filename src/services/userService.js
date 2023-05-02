import axios from 'axios';

import {
  BASE_URL
} from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

async function fetchUser(id) {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for users:', error);
  }
}

async function updateUserStatus(user, status, expiresAt) {
  try {
    const payload = {
      isPooping: status,
      isPoopingExpiresAt: expiresAt,
    };
    const response = await api.patch(`/users/${user._id}/update-status`, payload);

    if (response.status === 200) {
      console.log('Status updated successfully');
      return response.data;
    } else {
      console.error('Error updating status');
    }
  } catch (error) {
    console.error('API request failed:', error);
  }
}

async function searchUsers(searchTerm) {
  try {
    const response = await api.get('/search', { params: { q: searchTerm } });
    return response.data;
  } catch (error) {
    console.error('Error searching for users:', error);
    return [];
  }
};

export {
  fetchUser,
  searchUsers,
  updateUserStatus
}
