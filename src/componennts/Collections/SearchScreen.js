import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// ...


const SearchScreen = () => {
  const [jobs, setJobs] = useState([
    { title: 'UX Designer', company: 'Amazon', location: 'Seattle, US' },
    { title: 'VR Designer', company: 'Meta', location: 'London, UK' },
    { title: 'UI Designer', company: 'Glovo', location: 'Barcelona, ES' },
    // Add more jobs here...
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch jobs from an API or database in real-world applications
  }, []);

 /*  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Your Specie</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Species here"
        onChangeText={text => setSearchTerm(text)}
      />
      <Text style={styles.subHeader}>Popular</Text>
      <FlatList
        data={jobs}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => console.log('Job selected:', item.title)}>
            <Animated.View style={styles.jobItem}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobCompany}>{item.company}</Text>
              <Text style={styles.jobLocation}>{item.location}</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    padding: 20,
    backgroundColor: '#F3F4F6', // A light grey background
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    borderRadius: 25,
    borderColor: '#DDD',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  jobItem: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  jobCompany: {
    fontSize: 16,
    color: '#555',
  },
  jobLocation: {
    fontSize: 14,
    color: '#777',
  },
});

export default SearchScreen;
