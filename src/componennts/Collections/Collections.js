import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CollectionItem = ({ item }) => {
  return (

    <SafeAreaView>
        <TouchableOpacity style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const Collections = () => {
  // This would be replaced by your actual data fetching logic
  const dummyData = [
    {
      id: '1',
      title: 'Cardinal',
      description: 'A red bird commonly found in North America.',
      image: require('../../../assets/animal1.jpg'),
    },
    {
      id: '2',
      title: 'Monarch Butterfly',
      description: 'An orange butterfly known for its long migrations.',
      image: require('../../../assets/animal1.jpg'),
    },{
      id: '2',
      title: 'Monarch Butterfly',
      description: 'An orange butterfly known for its long migrations.',
      image: require('../../../assets/animal1.jpg'),
    },{
      id: '3',
      title: 'Monarch Butterfly',
      description: 'An orange butterfly known for its long migrations.',
      image: require('../../../assets/animal1.jpg'),
    },{
      id: '4',
      title: 'Monarch Butterfly',
      description: 'An orange butterfly known for its long migrations.',
      image: require('../../../assets/animal1.jpg'),
    },{
      id: '5',
      title: 'Monarch Butterfly',
      description: 'An orange butterfly known for its long migrations.',
      image: require('../../../assets/animal1.jpg'),
    },{
      id: '6',
      title: 'Monarch Butterfly',
      description: 'An orange butterfly known for its long migrations.',
      image: require('../../../assets/animal1.jpg'),
    },
    // ... more items
  ];

  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <CollectionItem item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Collections;
