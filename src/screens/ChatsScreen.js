import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles/globalStyles';

const ChatsScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    // Implement fetch chats logic here, e.g., call API to get chats
  };

  const openChat = (chatId) => {
    // Navigate to the ChatRoomScreen with the chatId
    navigation.navigate('ChatRoom', { chatId });
  };

  useEffect(() => {
    const fetchChats = async () => {
      const fetchedChats = await getChats();
      setChats(fetchedChats);
    };

    fetchChats();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Chats</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => openChat(item._id)}
          >
            <Text style={styles.chatName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatName: {
    fontSize: 18,
  },
});

export default ChatsScreen;
