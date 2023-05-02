import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import globalStyles from '../styles/globalStyles';

const SearchBar = ({ value, onChangeText }) => (
  <TextInput
    style={globalStyles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder="Search for users..."
  />
);

export default SearchBar;
