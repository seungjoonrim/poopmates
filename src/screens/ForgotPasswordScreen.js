import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { requestPasswordReset } from '../services/api';
import globalStyles from '../styles/globalStyles';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  // TODO
  const handleForgotPassword = async () => {
    try {
      await requestPasswordReset(email);
      setSuccess(true);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Forgot Password</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleForgotPassword}
        disabled={success}
      >
        <Text style={globalStyles.buttonText}>
          {success ? 'Reset Email Sent' : 'Send Reset Email'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
