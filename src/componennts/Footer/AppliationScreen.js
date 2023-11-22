import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const categories = ['Saved', 'Applied', 'Interviews', 'Job alert'];

const getStatus =(job) => {
  let iconName;
  switch (job.status) {
    case 'pending':
      iconName = 'hourglass-empty'; // Replace with your icon name
      break;
    case 'accepted':
      iconName = 'check-circle'; // Replace with your icon name
      break;
    case 'rejected':
      iconName = 'cancel'; // Replace with your icon name
      break;
    default:
      iconName = ''; // Default to an empty string if no match
  }
  return iconName;
}
// Add more details to each job
const allJobs = [
  
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      dateSaved: '2023-10-31',
      status: 'New',
      category: 'Saved',
    },
    {
      id: '2',
      title: 'Data Scientist',
      company: 'Meta',
      location: 'Menlo Park, CA',
      dateSaved: '2023-11-01',
      status: 'Applied',
      category: 'Applied',
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'Apple',
      location: 'Cupertino, CA',
      dateSaved: '2023-11-02',
      status: 'Interview Scheduled',
      category: 'Interview Scheduled',
    },
    {
      id: '4',
      title: 'UX Designer',
      company: 'Microsoft',
      location: 'Redmond, WA',
      dateSaved: '2023-11-03',
      status: 'Offer Received',
      category: 'Offer Received',
    },
  ];
  const icons = {
    New: 'clock-circle',
    Applied: 'check-circle',
    'Interview Scheduled': 'calendar-check',
    'Offer Received': 'gift-outline',
  };
  
  const JobStatusIcon = ({ status }) => {
    const iconName = icons[status];
    return <Icon name={iconName} size={24} color="#000"  />;
  };
  

  
  

const ApplicationScreen = () => {
  const navigation = useNavigation()

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [displayedJobs, setDisplayedJobs] = useState(allJobs);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    const filteredJobs = allJobs.filter(job => job.category === category);
    setDisplayedJobs(filteredJobs);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.categoryButton} 
            onPress={() => handleCategoryPress(item)}
          >
            <Text style={[styles.categoryText, item === selectedCategory ? styles.selectedCategory : {}]}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
      />

      <View  style={styles.jobContainer}>
      {displayedJobs.map((job) => (
  <TouchableOpacity key={job.id} style={styles.jobItem} onPress={()=>{navigation.navigate("JobDescriptionScreen")}}>
    <Text style={styles.jobTitle}>{job.title}</Text>
    <Text style={styles.jobCompany}>{job.company}</Text>
    <View style={styles.jobStatus}>
    <JobStatusIcon status={job.status} />
      </View>
      </TouchableOpacity>
))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  categoryButton: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    
    height:'50%',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
  },
  selectedCategory: {
    color: '#333',
    fontWeight: 'bold',
    borderBottomWidth:1,
    borderBottomColor:'#333',
    padding:1.5,
  },
  jobContainer: {
    backgroundColor:'#f0f0f0',
    flex: 9,
    padding: 10,
    marginTop: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  }, jobItem:{
    backgroundColor:'#f8f8f8', 
    padding:5, 
    marginBottom:5, 
    borderRadius:5, 
    shadowColor:'#000', 
    shadowOffset:{width:'0%', height:'2%'}, 
    shadowOpacity:0.25, 
    shadowRadius:3.84, 
    elevation:5,
  },
  jobTitle:{
    fontSize:18, 
    fontWeight:'bold', 
    color:'#333'
  },
  jobCompany:{
    fontSize:16, 
    color:'grey'
  },
  jobLocation:{
    fontSize:14, 
    color:'grey'
  },
  jobDateSaved:{
    fontSize:12, 
    color:'grey'
  },
  jobStatus:{
    position:'absolute',
    right:1,
    bottom:1,
    fontSize:12, 
    color:'green'

  }
});

export default ApplicationScreen;
