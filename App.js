import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestAPI from './test';
import Card from './src/componennts/card/Card';
import Categories from './src/componennts/Categories/Categories';

export default function App() {
  return (
    <View >
     <Categories/>
    </View>
  );
}
