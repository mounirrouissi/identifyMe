// ChatListScreen component
import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import IMG from '../../../assets/photo1.jpg'
import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const ChatItem = ({ chat }) => {
  const { profilePicture, name, lastMessage } = chat;

  const navigation = useNavigation();

  const navigateToChatConversationScreen = () => {
    navigation.navigate('ChatConversationScreen', { chatId: chat.id });
  };


  return (
    <TouchableOpacity style={styles.chatItem} key={chat.name} onPress={() => navigateToChatConversationScreen(chat)}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image
              source={IMG}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{chat.name}</Text>
              <Text>{chat.lastMessage}</Text>
            </View>
          </View>
    </TouchableOpacity>
  );
};

const dummyData = [
  {
    profilePicture: `${IMG}`,
    name: 'John Doe',
    lastMessage: 'Hey there!',
  },
  {
    profilePicture: 'https://example.com/profile-picture2.jpg',
    name: 'Jane Doe',
    lastMessage: 'How are you doing?',
  },
  {
    profilePicture: 'https://example.com/profile-picture3.jpg',
    name: 'Peter Parker',
    lastMessage: 'Im doing well, thanks for asking!',
  },

];

const ChatListScreen = () => {
  const [chats, setChats] = useState(dummyData);

  // Fetch the list of chats from the backend API.

  return (
    <FlatList
      style={styles.chatListScreen}
      data={chats}
      renderItem={({ item }) => (
        <ChatItem chat={item} />
      )}
    />
  );
};





// ChatItem styles
const styles = StyleSheet.create({});

export default ChatListScreen;
