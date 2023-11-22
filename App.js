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

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Collections" component={HomeLayout} />
        <Stack.Screen name="FooterScreen" component={FooterScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
    </>
  );
}
