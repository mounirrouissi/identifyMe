import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView, Dimensions } from 'react-native';
import { Modal, Button } from 'react-native';




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
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedAnimals, setSelectedAnimals] = useState([]);

const handleSelection = (animal) => {
  setSelectedAnimals(prev => {
    if(prev.includes(animal)) {
      return prev.filter(a => a !== animal);
    } else {
      return [...prev, animal];
    }
  });
  console.log(selectedAnimals)
};


const AnimalButton = ({ title, onPress, isSelected }) => (
    <TouchableOpacity 
      style={[styles.animalButton, isSelected ? styles.selectedButton : null]}
      onPress={onPress}>
      <Text style={[styles.animalButtonText, isSelected ? styles.selectedButtonText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

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
      <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
  <Text style={styles.headerText}>Species</Text>
  <Ionicons name={modalVisible ? "ios-arrow-up" : "ios-arrow-down"} size={24} color="black" />
</TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Ionicons name="ios-menu" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.container}
      />

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeButton}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
            <Text style={styles.modalText}>Choose an animal type:</Text>
            <View style={styles.buttonContainer}>
              {['Bird', 'Fish', 'Butterfly'].map(animal => (
                <AnimalButton
                  key={animal}
                  title={animal}
                  onPress={() => handleSelection(animal)}
                  isSelected={selectedAnimals.includes(animal)}
                />
              ))}
            </View>
            
          </View>
        </View>
      </Modal>
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

      animalButton: {
        
        justifyContent: 'space-between',
        backgroundColor: '#007AFF', // Vibrant button color
        padding: 12, // Bigger button for better touch area
        borderRadius: 10, // Rounded corners
        marginVertical: 5, // Margin for spacing
        
        shadowColor: 'rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 3, // Elevation for Android
        margin: 5, // Add margin for spacing between buttons
        minWidth: '40%', // Minimum width for each button
      },
      buttonContainer: {
        flexDirection: 'row', // Align buttons in a row
        flexWrap: 'wrap', // Allow wrapping to the next line
        justifyContent: 'space-evenly', // Evenly space buttons
        marginBottom: 20, // Margin at the bottom before the close button
      },
      animalButtonText: {
        color: 'white', // Text color for contrast
        fontWeight: 'bold', // Bold text
        textAlign: 'center', // Center text
      },
      selectedButton: {
        backgroundColor: '#34C759', // Different color for selected state
      },
      selectedButtonText: {
        color: '#FFF', // Keep text color consistent for selected state
      },
      modalView: {
        marginTop:'30%',
        height: '50%',
        width: '100%', // Adjust width to accommodate two buttons per row
        backgroundColor: '#F0F0F3', // Modern background color
        borderRadius: 15, // Rounded corners
        padding: 20, // Increase padding for better layout
        alignItems: 'center', // Center align items
        // ... existing modalView styles
        backgroundColor: '#F0F0F3', // Modern background color
        borderRadius: 15, // More rounded corners
      },
      modalText: {
        // ... existing modalText styles
        color: '#333', // Modern text color
      },

      closeButton: {
        alignSelf: 'flex-end', // align the button to the right
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
