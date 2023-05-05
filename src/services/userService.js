import axios from 'axios';

import {
  BASE_URL
} from '../utils/constants';

const api = axios.create({
  baseURL: BASE_URL,
});

async function getUser(id) {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for users:', error);
  }
}

async function patchUserStatus(user, status, expiresAt) {
  try {
    const payload = {
      isPooping: status,
      isPoopingExpiresAt: expiresAt,
    };
    const response = await api.patch(`/users/${user._id}/update-status`, payload);

    if (response.status === 200) {
      console.log('Status updated successfully');
      return response.data;
    }
  } catch (error) {
    console.error('Error updating status');
  }
}

async function getSearchUsers(searchTerm) {
  try {
    const response = await api.get('/search', { params: { q: searchTerm } });
    return response.data;
  } catch (error) {
    console.error('Error searching for users:', error);
    return [];
  }
};

async function postRequestFriend(userId, friendId) {
  console.log(userId);
  console.log(friendId);
  try {
    const response = await api.post(`/send-friend-request/${userId}/${friendId}`);

    if (response.status == 200) {
      console.log('Friend requested successfully');
      return response.data;
    }

  } catch (error) {
    console.error('Error sending friend request:', error.response.data.message);
  }
}

async function postAcceptFriend(userId, friendId) {
  try {
    const response = await api.post(`/accept-friend-request/${userId}/${friendId}`);

    if (response.status == 200) {
      console.log('Friend accepted successfully');
      return response;
    }

  } catch (error) {
    console.error('Error accepting friend request:', error.response.data.message);
  }
}

async function postRejectFriend(userId, friendId) {
  try {
    const response = await api.post(`/reject-friend-request/${userId}/${friendId}`);

    if (response.status == 200) {
      console.log('Friend request rejected successfully');
      return response;
    }

  } catch (error) {
    console.error('Error rejecting friend request:', error.response.data.message);
  }
}

export {
  getUser,
  getSearchUsers,
  patchUserStatus,
  postAcceptFriend,
  postRejectFriend,
  postRequestFriend,
}
