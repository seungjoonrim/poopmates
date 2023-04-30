import { createContext } from 'react';

const FriendsContext = createContext({
  friends: [],
  addFriend: () => {},
  removeFriend: () => {},
  // Add other functions for friend requests, chat management, etc.
});

export default FriendsContext;
