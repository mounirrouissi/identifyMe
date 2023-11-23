import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './src/componennts/Categories/Categories.js';
import HomeLayout from './src/componennts/Collections/HomeLayout';
import ProfileScreen from './src/componennts/Footer/ProfileScreen';
import HeaderScreen from './src/componennts/Collections/HeaderScreen';
import SearchScreen from './src/componennts/Collections/SearchScreen';
import ExploreScreen from './src/componennts/Footer/explore/ExploreScreen';
import FooterScreen from './src/componennts/Footer/FooterScreen';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          
      <Tab.Navigator tabBar={props => <FooterScreen {...props} screenOptions={{ headerShown: false }}/>}
      screenOptions={{ headerShown: false }} // This line hides the header
      >
      <Stack.Screen name="Categories" component={Categories}  />
        <Stack.Screen name="Collections" component={HomeLayout} />
        <Stack.Screen name="FooterScreen" component={FooterScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HeaderScreen" component={HeaderScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
