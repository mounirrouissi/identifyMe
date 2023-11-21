import React, { useState, useEffect } from 'react';
import { View, Image, Button, Text } from 'react-native';
import { Configuration, OpenAIApi } from "openai";


const TestAPI = () => {
    const [cards, setCards] = useState([]);
  const [imageAnalysis, setImageAnalysis] = useState(null);
  const imageUrl = "https://imagedelivery.net/GKBjlA7FNZ1yXpesD1551w/da576ac9-f16f-404d-96da-645d25451601/public";

  const analyzeImage = async () => {
    try {
      const configuration = new Configuration({
        apiKey: "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", // Replace with your API key or a secure way to access it
      });
     
      const openai = new OpenAIApi(configuration);

      const response = await openai.createChatCompletion({
        model: "gpt-4-vision-preview",
        messages: [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": "describe the image "
              },
              {
                "type": "image_url",
                "image_url": {
                  "url": imageUrl,
                  "detail": "low"
                }
              }
            ]
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0
      });
      console.log(response.data)
      setImageAnalysis(response.data.choices[0]);
    } catch (error) {
      console.error('Error during OpenAI API call:', error);
    }

    const newCard = {
        image: imageUrl,
        description: JSON.stringify(imageAnalysis),
      };
      setCards([...cards, newCard]);
  };

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      <Button title="Analyze Image" onPress={analyzeImage} />
      {imageAnalysis && (
        <Swiper
          cards={cards}
          renderCard={(card) => (
            <View style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{card.description}</Text>
            </View>
          )}
          // ... Other Swiper props
        />
      )}
    </View>
  );
};

export default TestAPI;
