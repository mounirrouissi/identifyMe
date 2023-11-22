import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
const UploadCVScreen = () => {

    const [cvUri, setCvUri] = useState(null);
    const handleUploadPress = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (!result.cancelled) {
          setCvUri(result.uri);
          console.log(result.uri); // This is the local URI of the CV
        }
      };
    
      const uploadCV = async () => {
        if (cvUri) {
          // Define your upload URL and options here
          const uploadUrl = 'https://your-upload-url.com';
          const options = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            httpMethod: 'POST',
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName: 'file',
          };
      
          // Upload the CV using FileSystem.uploadAsync()
          const result = await FileSystem.uploadAsync(uploadUrl, cvUri, options);
      
          // Log the result
          console.log(result);
        }
      };
      
    
          
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload CV</Text>
      <Text style={styles.subheader}>Paste descriptions</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPress}>
        <Text style={styles.uploadButtonText}>Upload your CV Here</Text>
      </TouchableOpacity>
      {cvUri && (
        <Button title="Confirm Upload" onPress={uploadCV} />
      )}
      <Text style={styles.note}>File have to be PDF or Docs</Text>
      <Text style={styles.footer}>**Matching will be generate by Artificial Intelligences**</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
  },
  uploadButton: {
    borderColor: '#007BFF',
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  uploadButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  note: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
});

export default UploadCVScreen;
