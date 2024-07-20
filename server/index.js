const express = require('express');
const AIModel = require('./config/model');
require('dotenv').config();

const app = express();
const port = 5000;

app.get('/get_quizzes', async (req, res) => {
  try {
    const prompt = "Generate a quiz with 5 questions and their answers on the topic of mathematics.";
    const quiz = await AIModel.generateText(prompt);
    res.json({ quiz });
  } catch (error) {
    console.error('Error generating quiz:', error);
    res.status(500).send('An error occurred while generating the quiz.');
  }
});

app.get('/generate_image', async (req, res) => {
  try {
    const prompt = req.query.prompt || 'a futuristic cityscape';
    const imageUrl = await AIModel.generateImage(prompt);
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send('An error occurred while generating the image.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
