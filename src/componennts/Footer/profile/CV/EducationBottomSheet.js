import React from 'react';
import { View, Text, Button, Modal, TextInput, TouchableOpacity } from 'react-native';

const EducationForm = ({ level, setLevel, domain, setDomain, addEducation }) => {
  return (
    <View style={styles.contentContainer}>
  <Text>Level</Text>
    <TextInput
      label="Level of Education"
      value={level}
      onChangeText={setLevel}
      style={styles.input}
      theme={{ colors: { primary: '#007BFF', text: '#000' } }}
      mode="outlined"
    />
    <Text>Domain</Text>
    <TextInput
      label="Domain"
      value={domain}
      onChangeText={setDomain}
      style={styles.input}
      theme={{ colors: { primary: '#007BFF', text: '#000' } }}
      mode="outlined"
    />
    <Button title="Save" onPress={()=>{addEducation()}} />
  </View>
  );
};
const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    addExperiencecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 24,
        height: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    addEducationcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 24,
        height: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {

    },
    experience: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 70,
        borderColor: 'gray',
        borderWidth: 4,
        marginTop: 12,
    },
    addExperienceButton: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '',


    },

    contentContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
    },


};
export default EducationForm;
