import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const CategoryItem = ({ item, index }) => {
  return (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );
};

const Categories = () => {
  const categories = [
    { title: 'Animals', image: require('../../../assets/animal1.jpg') },
    { title: 'Plants', image: require('../../../assets/animal1.jpg') },
    // ... Add other categories with their respective images
  ];

  // Carousel refs
  const carouselRef = React.useRef(null);

  // Function to go to the next category
  const goNext = () => {
    carouselRef.current.snapToNext();
  };

  // Function to go to the previous category
  const goPrev = () => {
    carouselRef.current.snapToPrev();
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={categories}
        renderItem={CategoryItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        firstItem={0}
      />
      <TouchableOpacity style={styles.arrowLeft} onPress={goPrev}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={goNext}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  categoryItem: {
    width: screenWidth,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  arrowLeft: {
    position: 'absolute',
    left: 25,
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    right: 25,
    zIndex: 1,
  },
  arrowText: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Categories;
