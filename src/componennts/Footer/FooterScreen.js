import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons';

const FooterScreen = () => {
  const navigation = useNavigation()
  return (
    <View >
      <View style={{ 
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F5F5F5',
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
      
          <Text style={{ color: '#00539C' }}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate("Collections")}}>
          
          <Text style={{ color: 'grey' }}>APPLICATIONS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate("Collections")}}>
          
          <Text style={{ color: 'grey' }}>MESSAGES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate("Collections")}}>
          
          <Text style={{ color: 'grey' }}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default FooterScreen;
