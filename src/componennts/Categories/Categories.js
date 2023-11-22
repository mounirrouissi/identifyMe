import React, { useEffect, useState,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { ScrollView } from 'react-native';
import animal1 from '../../../assets/animal1.jpg';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../../../lib/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

const Categories = () => {
  const navigation= useNavigation()
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [openCamera, setOpenCamera] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const categories = ['Animals', 'Plants', 'Birds', 'Bugs'];
  const scaleAnim = useState(new Animated.Value(1))[0]; // For category selection animation
  const scrollViewRef = useRef();
  
  // Animated category selection
  const animateSelection = () => {
      Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true
      }).start();
  };

  const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      animateSelection();
  };
  const categoryColors = {
    'Animals': 'maroon',
    'Plants': 'green',
    'Birds': 'blue',
    'Bugs': 'orange',
  };

  
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



  const scrollToNextCategory = () => {
      // Logic to scroll to the next category
  };

  const scrollToPreviousCategory = () => {
      // Logic to scroll to the previous category
  };

  const navigateToCollections = () => {
      // Logic to navigate to the Collections screen
      
  };
  const WINDOW_WIDTH = Dimensions.get('window').height;

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const categoryHeight = windowHeight / 30; // Adjust based on your category item height
  
    const currentCategoryIndex = Math.round(scrollPosition / categoryHeight);
    const currentCategory = categories[currentCategoryIndex];
  
    if (currentCategory !== selectedCategory) {
        setSelectedCategory(currentCategory);
        animateSelection();
    }
  };
  // Render categories in a scroll view
  const renderCategories = () => {
    return categories.map((category, index) => (
      <TouchableOpacity 
        key={index} 
        style={[
          styles.categoryButton, 
          { backgroundColor: categoryColors[category] },
          category === selectedCategory ? styles.selectedCategory : null
        ]}
        onPress={() => handleCategorySelect(category)}
      >
        <Animated.Text
                    style={[
                        styles.categoryText,
                        category === selectedCategory ? { transform: [{ scale: scaleAnim }] } : null
                    ]}
                >
                    {category}
                </Animated.Text>
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
  <Icon name="arrow-back" size={30} color="#fff" />
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
                ref={scrollViewRef}
                
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesScrollView}
                contentContainerStyle={styles.categoriesContainer}
                onScroll={handleScroll} // Add this line
                scrollEventThrottle={16} // Add this line for better performance
            >
                {renderCategories()}
             {/*    <TouchableOpacity 
                style={styles.arrowButtonLeft} 
                onPress={scrollToPreviousCategory}>
                <Icon name="chevron-back" size={30} color="#fff" />
            </TouchableOpacity> */}
            <Text 
                style={styles.arrowButtonRight} 
                onPress={scrollToNextCategory}>
                <Icon name="chevron-down" size={30} color="#fff" />
            </Text>
            <Text>More to come ...</Text>
            </ScrollView>

           

            

            <TouchableOpacity 
                style={styles.collectionsButton} 
                onPress={() => navigation.navigate('Collections')}>
                <Icon name="home" size={30} color="#fff" />
            </TouchableOpacity>
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
      backgroundColor: 'white',
      
  },
  categoriesContainer: {
      alignItems: 'center',
      padding: 10,
  },
  categoryButton: {
    marginVertical: 20,
    paddingVertical: 8,
    paddingHorizontal: 45,
    backgroundColor: 'dodgerblue',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
},
selectedCategory: {
    backgroundColor: COLORS.primary,
    shadowColor: 'deepskyblue',
    transform: [{ scale: 2.1 }],
    shadowColor: '#ff4757',
  
},
categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
},
cameraOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)', // Semi-transparent black overlay
},
squareFrame: {
  width: 250,
  height: 250,
  borderWidth: 3,
  borderColor: '#fff',
  borderStyle: 'dashed', // Dashed border for a modern look
  borderRadius: 20, // Slightly rounded corners
},
backButton: {
  position: 'absolute',
  top: 20,
  left: 20,
  padding: 10,
  borderRadius: 30,
  backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent black
},
arrowButtonLeft: {
  position: 'absolute',
  left: 10,
  top: windowHeight / 4,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: 30,
  padding: 10,
},
arrowButtonRight: {
  position: 'absolute',
  top:0,
  left: 30,
  top: windowHeight / 6,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: 30,
  padding: 10,
},
collectionsButton: {
  position: 'absolute',
  bottom: 5,
  right: 5,
  backgroundColor: COLORS.primary,
  borderRadius: 30,
  padding: 15,
},
});


export default Categories;
