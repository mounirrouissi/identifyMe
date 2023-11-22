import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooterScreen from './FooterScreen';

const FooterLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
    <FooterScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFCD19',
  },
});

export default FooterLayout;
