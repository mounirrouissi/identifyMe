import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestAPI from './test';
import Card from './src/componennts/card/Card';
import Categories from './src/componennts/Categories/Categories.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Collections from './src/componennts/Collections/Collections';
import FooterScreen from './src/componennts/Footer/FooterScreen';
import HomeLayout from './src/componennts/Collections/HomeLayout';
import ProfileScreen from './src/componennts/Footer/ProfileScreen';
import HeaderScreen from './src/componennts/Collections/HeaderScreen';
import SearchScreen from './src/componennts/Collections/SearchScreen';
import ExploreScreen from './src/componennts/Footer/explore/ExploreScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
 <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Categories" component={Categories}  />
        <Stack.Screen name="Collections" component={HomeLayout} />
        <Stack.Screen name="FooterScreen" component={FooterScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HeaderScreen" component={HeaderScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
    </>
  );
}
