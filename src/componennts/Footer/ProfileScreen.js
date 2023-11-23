import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SIZES } from '../../../lib/COLORS';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const [showUploadScreen, setShowUploadScreen] = useState(false);
    const navigation = useNavigation()

  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState( {
    name: '',
    email: 'afigler@gmail.com',
  });

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  

  const updateUserName = (newName) => {
    setUser({ ...user, name: newName });
  };
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePic} /> 
      <View style={{flexDirection:'row',alignSelf:'center'}} >
        <Text style={styles.name}>{user.name}</Text>
         <Icon name="edit" size={25} color="blue"  />
      </View>

      <Text style={styles.email}>{user.email}</Text>
      


     
<TouchableOpacity 
  style={styles.itemContainer}
  onPress={() => navigation.navigate('SettingScreen')}
>
  <Icon name="cog" type="font-awesome" size={24} color="#000" />
  <Text style={styles.section}>Settings</Text>
  <Icon 
    name="arrow-right" 
    type="font-awesome" 
    size={18} 
    color="#000" 

  />
</TouchableOpacity>


<TouchableOpacity 
  style={styles.itemContainer}
  onPress={() => navigation.navigate('NotificationScreen')}
>
  <Icon name="bell" type="font-awesome" size={24} color="#000" />
  <Text style={styles.section}>Notifications</Text>
  <Icon 
    name="arrow-right" 
    type="font-awesome" 
    size={18} 
    color="#000" 
  />
</TouchableOpacity>

  


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple', // Change this to match your header color
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc', // replace this with your profile picture
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  }, 
  section: {
    fontSize: SIZES.large,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  itemContainer: { 
    backgroundColor: 'transparent', // Change the opacity as needed
  flexDirection: 'row',
  height: 50,
  marginBottom:5,
  alignItems: 'center',
  justifyContent: 'space-between',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 0.3,}
});

export default ProfileScreen;
