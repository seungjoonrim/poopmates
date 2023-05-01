import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { FriendsProvider } from './src/context/FriendsContext';

const App = () => {

  return (
    <AuthProvider>
      <FriendsProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </FriendsProvider>
    </AuthProvider>
  );
};

export default App;
