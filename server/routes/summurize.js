const AIModel = require('../config/model');
const express = require('express');
const router = express.Router();

router.post('/summarize', async (req, res) => {
  try {
    const content = req.body.content; // Expect the content to be summarized to be sent in the request body
    const prompt = `Summarize or explain the following content: ${content}`;

    const summary = await AIModel.getChatCompletion(prompt);
    res.json({ summary });
  } catch (error) {
    console.error('Error generating summary:', error);
    res.status(500).send('An error occurred while generating the summary.');
  }
});

module.exports = router;
