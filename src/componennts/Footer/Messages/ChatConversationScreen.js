import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMG from '../../../assets/photo1.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../Constants/theme';
import { useNavigation } from '@react-navigation/native';

const ChatConversationScreen = ({ chatId }) => {
    const navigation = useNavigation()

  const [chatConversation, setChatConversation] = useState([
    {
      senderId: '1',
      senderName: 'John Doe',
      message: 'Hello, how are you?',
      timestamp: '2023-10-26T21:14:50Z',
    },
    {
      senderId: '2',
      senderName: 'You',
      message: 'I am fine. How about you?',
      timestamp: '2023-10-26T21:15:00Z',
    },
    {
      senderId: '1',
      senderName: 'John Doe',
      message: 'I am good. Thanks for asking!',
      timestamp: '2023-10-26T21:15:10Z',
    },
    // Add more messages here...
  ]);

  // Fetch the chat conversation from your backend API using the chatId prop.
/*   useEffect(() => {
    fetch(`https://your-api.com/chats/${chatId}`)
      .then((response) => response.json())
      .then((data) => setChatConversation(data))
      .catch((error) => console.error(error));
  }, [chatId]); */

    // Mock chat conversation data
     

    
    return (
        <SafeAreaView>
          <View style={{ flexDirection: 'row', justifyContent:'space-between', padding: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MessageScreen")}
            style={{
          
              marginTop:5,
              left: 0,
            }}  
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
            <Image
              source={ IMG }
              style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }}
            />
          </View>
          {chatConversation.map((message, index) => (
            <View
              key={index}
              style={{
                alignSelf: message.senderName === 'You' ? 'flex-end' : 'flex-start',
                backgroundColor: message.senderName === 'You' ? 'purple' : 'gray',
                borderRadius: 20,
                margin: 10,
                padding: 10,
              }}
            >
              <Text style={{ color: 'white' }}>{message.message}</Text>
            </View>
          ))}
        </SafeAreaView>
      );
    };


export default ChatConversationScreen;
