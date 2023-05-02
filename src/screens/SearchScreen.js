import React, {
  useEffect,
  useState
} from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import { searchUsers } from '../services/userService';
import globalStyles from '../styles/globalStyles';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  async function handleSearch() {
    const results = await searchUsers(searchTerm);
    setUsers(results);
  };

  useEffect(() => {
    async function fetchSearchResults() {
      if (searchTerm.trim() !== '') {
        const results = await searchUsers(searchTerm);
        setUsers(results);
      } else {
        setUsers([]);
      }
    };

    const searchTimeout = setTimeout(fetchSearchResults, 500);
    return () => clearTimeout(searchTimeout);
  }, [searchTerm]);

  return (
    <View style={globalStyles.container}>
      <SearchBar
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
      />
      <UserList users={users} />
    </View>
  );
};

export default SearchScreen;
