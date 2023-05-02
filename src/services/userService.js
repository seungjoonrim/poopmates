import axios from 'axios';

import {
  BASE_URL
} from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});


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

export {
  updateUserStatus
}
