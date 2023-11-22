import React from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const ExperienceBottomSheet = ({ company, setCompany, title, setTitle, dates, setDates, duties, setDuties, addExperience }) => {
  return (
    <View style={styles.contentContainer}>
      <TextInput
        label="Company Name"
        value={company}
        onChangeText={setCompany}
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', text: '#000' } }}
        mode="outlined"
      />
      <TextInput
        label="Job Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', text: '#000' } }}
        mode="outlined"
      />
      <TextInput
        label="Dates Worked"
        value={dates}
        onChangeText={setDates}
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', text: '#000' } }}
        mode="outlined"
      />
      <TextInput
        label="Duties and Responsibilities"
        value={duties}
        onChangeText={setDuties}
        multiline
        style={styles.input}
        theme={{ colors: { primary: '#007BFF', text: '#000' } }}
        mode="outlined"
      />
      <Button title="Save" onPress={addExperience} />
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
      flexDirection:'row',
      justifyContent: 'space-between',
      fontSize: 24,
      height:20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    title:{
  
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
export default ExperienceBottomSheet;
