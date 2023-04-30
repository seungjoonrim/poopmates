import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import TabNavigator from './src/navigation/TabNavigator';
import AuthContext from './src/context/AuthContext';
import FriendsContext from './src/context/FriendsContext';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [friends, setFriends] = React.useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const register = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addFriend = (friendData) => {
    setFriends([...friends, friendData]);
  };

  const removeFriend = (friendId) => {
    setFriends(friends.filter((friend) => friend._id !== friendId));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      <FriendsContext.Provider value={{ friends, addFriend, removeFriend }}>
        <NavigationContainer>
          {user ? <TabNavigator /> : <StackNavigator />}
        </NavigationContainer>
      </FriendsContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
