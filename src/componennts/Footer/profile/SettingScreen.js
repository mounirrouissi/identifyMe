import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../Constants/Index';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
    const navigation = useNavigation()
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isAccountPublic, setAccountPublic] = useState(false);
  const [language, setLanguage] = useState('English');


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'Arabic', value: 'arabic' },
  ]);
  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              
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
        <Text style={styles.settingText}>Public Account</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAccountPublic ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setAccountPublic}
          value={isAccountPublic}
        />
      </View>

      <View style={styles.settingItem}>
      <Text>Language</Text>
        <DropDownPicker
            open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      mode='BADGE'
      style={{backgroundColor: 'white', color: "gray", width: '70%',shadowColor:'transparent',borderColor:'transparent',marginHorizontal:50}}
      placeholder="Select Language"

       />
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={() => {/* Sign out logic */}}>
    <MaterialIcons name="logout" size={24} color={COLORS.black} />
    <Text style={styles.signOutText}>Sign Out</Text>
  </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
     marginTop: 13, // This will push the button to the bottom
     zIndex: 5
  },
  settingText: {
    fontSize: 18,
  },  
  signOutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 110, // This will push the button to the bottom
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  signOutText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SettingScreen;
