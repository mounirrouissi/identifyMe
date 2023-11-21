import React, { useState } from 'react';
import { View, Image, Button, Text } from 'react-native';
import IMG1  from './../../assets/animal.jpg'
const ImageAnalyzer = () => {
  const [imageAnalysis, setImageAnalysis] = useState(null);

  // URL of the image you want to analyze
  const imageUrl = {IMG1};

  const analyzeImage = async () => {
    try {
      const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key
      const requestBody = {
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "What’s that animal?" },
              {
                type: "image_url",
                image_url: {
                  "url": imageUrl,
                },
              },
            ],
          },
        ],
      };

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("animal is "+data)
      setImageAnalysis(data.choices[0]);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setImageAnalysis(null);
    }
  };

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      <Button title="Analyze Image" onPress={analyzeImage} />
      {imageAnalysis && (
        <Text>
          Analysis: {JSON.stringify(imageAnalysis, null, 2)}
        </Text>
      )}
    </View>
  );
};

export default ImageAnalyzer;
