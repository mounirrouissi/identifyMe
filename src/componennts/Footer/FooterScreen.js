import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

const FooterButton = React.memo(({ title, iconName, navigateTo, isActive }) => {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const color = isActive ? '#00539C' : 'grey';

  return (
    <TouchableOpacity
      style={styles.footerButton}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityLabel={`Navigate to ${title}`}
      accessibilityRole="button"
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Icon name={iconName} size={20} color={color} />
        <Text style={[styles.footerText, { color }]}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
});

const FooterScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Home');

  const navigateToScreen = (screenName) => {
    setActiveTab(screenName);
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.footerContainer}>
      <FooterButton
        title="Home"
        iconName="home"
        navigateTo="HomeScreen"
        isActive={activeTab === 'Home'}
      />
      <FooterButton
        title="Discoveries"
        iconName="compass"
        navigateTo="Collections"
        isActive={activeTab === 'Discoveries'}
      />
      <FooterButton
        title="Explore"
        iconName="globe"
        navigateTo="ExploreScreen"
        isActive={activeTab === 'Explore'}
      />
      <FooterButton
        title="Profile"
        iconName="user"
        navigateTo="ProfileScreen"
        isActive={activeTab === 'Profile'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footerButton: {
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    marginTop: 4,
  },
});
export default FooterScreen;
