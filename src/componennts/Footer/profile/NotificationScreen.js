import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../../Constants/Index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Switch } from 'react-native';
import { useState } from 'react';

const  NotificationScreen =() =>{
    
    const [isNotificationEnabled, setNotificationEnabled] = useState(false);

    const navigation = useNavigation()
    return (
      <SafeAreaView>
         <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top:23,
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
       <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              left: 0,
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setNotificationEnabled}
          value={isNotificationEnabled}
        />
      </View>
      </SafeAreaView>
    )
  
}
const styles = StyleSheet.create({
    container: {
    
      flex: 1,
      padding: 20,
     
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    settingText: {
      fontSize: 18,
    },
  });
export default NotificationScreen