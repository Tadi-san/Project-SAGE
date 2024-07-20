const express = require('express');
const AIModel = require('./config/model');
require('dotenv').config();

const app = express();
const port = 5000;

app.get('/get_quizzes', async (req, res) => {
  try {
    const prompt =
    'Generate a quiz with 10 questions and their answers on the topic of basic mathematics. Return the quiz in the following JSON format only, with no additional text: { "quiz": [ { "question": "<Your question here>", "answers": { "a": "<Option A>", "b": "<Option B>", "c": "<Option C>", "d": "<Option D>" }, "correct": "<Correct answer option>" }, { "question": "<Your question here>", "answers": { "a": "<Option A>", "b": "<Option B>", "c": "<Option C>", "d": "<Option D>" }, "correct": "<Correct answer option>" } ] }';
    // const prompt = `Generate a quiz with 2 questions, each including a word and its scrambled variations. For each question, provide a word, variations of that word, and indicate the correct variation. Ensure that the JSON structure is strictly as follows, and avoid using palindromes in the variations. Return the JSON only, with no additional text.

    // {
    //   "questions": [{"word": "example","variations": {"a": "example","b": "eamplex","c": "ampelxe","d": "exapmle"},"correct": "a"},
    //     {
    //       "word": "testing",
    //       "variations": {
    //         "a": "testing",
    //         "b": "tnesitg",
    //         "c": "tignets",
    //         "d": "sitteng"
    //       },
    //       "correct": "a"
    //     }
    //   ]
    // }`;
    
    const quiz = JSON.parse(await AIModel.getChatCompletion(prompt));
    res.json(quiz);
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


