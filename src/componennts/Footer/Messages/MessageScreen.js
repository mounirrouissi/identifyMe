import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../../Constants/theme'
import { useNavigation } from '@react-navigation/native'
import ChatListScreen from './ChatListScreen'

const MessageScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
    <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={{
          
              marginTop:9,
              
              left: 0,
            }}  
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24} 
              color={COLORS.black}
            />
          </TouchableOpacity>
    
    <ChatListScreen/>


    </SafeAreaView>
  )
}

export default MessageScreen