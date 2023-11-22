// SideDrawer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SideDrawer = () => {
  return (
    <View style={styles.main}>
      <Text>SideMenu</Text>
      {/* Add other sidebar content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // Add other styles as needed
  },
});

export default SideDrawer;
