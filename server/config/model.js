const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

class AIModel {
  static configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  static openai = new OpenAIApi(AIModel.configuration);

  static async generateText(prompt) {
    try {
      const response = await AIModel.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error generating text:', error);
      throw error;
    }
  }

  static async generateImage(prompt) {
    try {
      const response = await AIModel.openai.createImage({
        prompt: prompt,
        n: 1,
        size: '512x512',
      });
      return response.data.data[0].url;
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  }
}

module.exports = AIModel;
