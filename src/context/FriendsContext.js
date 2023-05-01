import React from 'react';
import { createContext } from 'react';

const FriendsContext = createContext({
  friends: [],
  addFriend: () => {},
  removeFriend: () => {},
  // Add other functions for friend requests, chat management, etc.
});

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = React.useState([]);

  function addFriend(friendData) {
    setFriends([...friends, friendData]);
  };

  function removeFriend(friendId) {
    setFriends(friends.filter((friend) => friend._id !== friendId));
  };

  return (
    <FriendsContext.Provider value={{ friends, addFriend, removeFriend }}>
      {children}
    </FriendsContext.Provider>
  );
};

export {
  FriendsContext,
  FriendsProvider
}
