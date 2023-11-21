import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import COW from '../../../assets/animal1.jpg';

const Card = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const data = [
    { name: "Cow", image: COW, description: "A large Cow native to Africa and India." },
    // ... more items
  ];

  return (
    <View style={styles.container}>
      <Swiper
        cards={data}
        renderCard={(card) => {
          let description = card.description;
          if (currentCardIndex === 1) {
            description = "This is cococ coc coco hi"; // New description for the second card
          }
          return (
            <View style={styles.card}>
              <Image source={card.image} style={styles.cardImage} />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{card.name}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
              </View>
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex + ' swiped');
          setCurrentCardIndex(cardIndex + 1); // Update the current card index
        }}
        onSwipedAll={() => { console.log('All cards swiped'); }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}  //change this with subsription  plan
        infinite
        animateCardOpacity
        swipeBackCard>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark background for the container
  },
  card: {
    height: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFF', // White border for contrast
    backgroundColor: '#262628', // Dark background for the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5, // For Android shadow

  },
  cardImage: {
    marginTop:10,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 18, // Slightly rounded corners for the image
    borderTopRightRadius: 18,
  },
  textContainer: {
    marginTop:5,
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Card;
