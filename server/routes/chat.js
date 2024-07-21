const express = require('express');
const bodyParser = require('body-parser');
const AIModel = require('../config/model');
const router = express.Router();

const sessions = {}; // In-memory store for user sessions

router.use(bodyParser.json());
// comming soon with database integration , and user authentication
router.post('/chat', async (req, res) => {
  try {
    const userId = req.body.userId;
    const userMessage = req.body.message;

    if (!userId || !userMessage) {
      return res.status(400).send('User ID and message are required.');
    }

    // Initialize session if not present
    if (!sessions[userId]) {
      sessions[userId] = [];
    }

    // Add user's message to the session
    sessions[userId].push({ sender: 'user', message: userMessage });

    // Generate a prompt with the conversation history
    const conversationHistory = sessions[userId]
      .map(entry => `${entry.sender}: ${entry.message}`)
      .join('\n');

    const prompt = `The following is a conversation with a friendly AI chatbot. The chatbot is helpful, creative, and very friendly.\n\n${conversationHistory}\nAI:`;

    // Get the chatbot's response
    const aiResponse = await AIModel.getChatCompletion(prompt);

    // Add the AI's response to the session
    sessions[userId].push({ sender: 'AI', message: aiResponse });

    // Send the AI's response back to the user
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Error in chatbot conversation:', error);
    res.status(500).send('An error occurred while processing the message.');
  }
});

module.exports = router;
