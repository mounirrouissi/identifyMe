import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const windowHeight = Dimensions.get('window').height;

const Categories = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [openCamera, setOpenCamera] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Animals', 'Plants', 'Birds', 'Bugs'];

  // Function to close the camera
const closeCamera = () => {
  setOpenCamera(false);
};

// Camera Overlay Component
const CameraOverlay = () => {
  return (
      <View style={styles.cameraOverlay}>
          <View style={styles.squareFrame}></View>
      </View>
  );
};
  // Handle camera permission
  const handleCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      setOpenCamera(status === 'granted');
  };

  // Handle gallery access
  const handleGalleryAccess = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });

      console.log(result);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
      setSelectedCategory(category);
  };

  // Render categories in a scroll view
  const renderCategories = () => {
      return categories.map((category, index) => (
          <TouchableOpacity 
              key={index} 
              style={[
                  styles.categoryButton, 
                  category === selectedCategory ? styles.selectedCategory : null
              ]}
              onPress={() => handleCategorySelect(category)}
          >
              <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
      ));
  };

  return (
      <View style={styles.container}>
          {openCamera ? (
            <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type}>
            <CameraOverlay />
        </Camera>
        <TouchableOpacity onPress={closeCamera} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
    </View>
          ) : (
              <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={handleCameraPermission} style={styles.button}>
                      <Text style={styles.buttonText}>Open Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleGalleryAccess} style={styles.button}>
                      <Text style={styles.buttonText}>Open Gallery</Text>
                  </TouchableOpacity>
              </View>
          )}

          <ScrollView  
              
              showsHorizontalScrollIndicator={false} 
              style={styles.categoriesScrollView}
              contentContainerStyle={styles.categoriesContainer}
          >
              {renderCategories()}
          </ScrollView>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  cameraContainer: {
      height: windowHeight / 2,
  },
  camera: {
      flex: 1,
  },
  buttonContainer: {
      height: windowHeight / 2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      margin: 10,
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
  },
  categoriesScrollView: {
      height: windowHeight / 2,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  categoriesContainer: {
      alignItems: 'center',
      padding: 10,
  },
  categoryButton: {
      marginVertical: 15,
      paddingVertical: 5,
      paddingHorizontal: 15,
      backgroundColor: '#007bff',
      borderRadius: 20,
      elevation: 2,

  },
  selectedCategory: {
      backgroundColor: '#ff4757',
      transform: [{ scale: 2.1 }],
      shadowColor: '#ff4757',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
  },
  categoryText: {
      color: 'white',
      fontSize: 16,
  },
  
});


export default Categories;
