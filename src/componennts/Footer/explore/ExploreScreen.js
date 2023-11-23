import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView, Dimensions } from 'react-native';
import { Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const initialLayout = { width: Dimensions.get('window').width };

const TipsRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Text style={styles.tabContent}>Tips Content</Text>
  </ScrollView>
);

const DiseasesRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text style={styles.tabContent}>Diseases Content</Text>
  </ScrollView>
);

const ExploreScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tips', title: 'Tips' },
    { key: 'diseases', title: 'Diseases' },
  ]);


  const speciesList = ["Birds", "Mammals", "Fish", "Reptiles", "Amphibians"];

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedSpecies, setSelectedSpecies] = useState("Select Species");
  
    const handleSelectSpecies = (species) => {
      setSelectedSpecies(species);
      setShowDropdown(false);
    };

  const renderScene = SceneMap({
    tips: TipsRoute,
    diseases: DiseasesRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: 'blue' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <>
        <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setShowDropdown(true)}>
        <Text style={styles.headerText}>{selectedSpecies}</Text>
        <Ionicons name="ios-arrow-down" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={showDropdown}
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setShowDropdown(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={speciesList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectSpecies(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF', // A clean white background
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2', // Soft border color
      },
      dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8, // Slightly larger touch area
      },
      headerText: {
        marginRight: 5,
        
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Modern font color
      },
      menu: {
        padding: 8, // Consistent touch area
      },
  container: {
    marginTop: 10,
  },
  scene: {
    flex: 1,
  },
  tabContent: {
    padding: 20,
    fontSize: 18,
  },
});

export default ExploreScreen;
