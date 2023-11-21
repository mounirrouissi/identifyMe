import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import supabase from '../../../lib/supabase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CameraComponent = () => {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [selectedImage, setSelectedImage] = useState(null);
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      console.log("uri"+photo.uri);
      setSelectedImage(photo.uri); // Set captured image
      handleImageUpload(photo); // Handle upload
    }
  };


   // Function to handle image upload and metadata storage
   const handleImageUpload = async (photo) => {
    try {
      const uploadedImage = await uploadImage(photo);
      console.log("uploadedImage"+uploadedImage)
      await storeImageMetadata(uploadedImage.Key); // Assuming Key is the image URL
    } catch (error) {
      console.error('Error handling the image upload:', error);
    }
  };
  
  const uploadImage = async (photo) => {
    const response = await fetch(photo.uri);
    const blob = await response.blob();
  
    let filename = photo.uri.split('/').pop();
    let { data, error } = await supabase.storage
      .from('IdentifyME')
      .upload(`folder/${filename}`, blob);
  
    if (error) {
      throw new Error('Error uploading image');
    }
    return data;
  };

  const storeImageMetadata = async (imageUrl) => {
    const { data, error } = await supabase
      .from('images')
      .insert([{ url: imageUrl, /* other metadata */ }]);
  
    if (error) {
      throw new Error('Error storing image metadata');
    }
  };
 // Updated pickImage function
 const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    setSelectedImage(result.uri); // Set picked image
    handleImageUpload({ uri: result.uri }); // Handle upload
  };
  
  

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(cameraStatus.status === 'granted' && galleryStatus.status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.errorText}>No access to camera or gallery</Text>;
  }

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
      ) : (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.text}>Pick from Gallery</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: windowWidth,
    height: windowHeight,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  imagePreview: {
    width: windowWidth,
    height: windowHeight,
  },
});

export default CameraComponent;

