// models/groqAI.js
const Groq = require("groq-sdk");
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

class GroqAI {
  static async getChatCompletion(prompt) {
    try {
      const response = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama3-8b-8192",
      });
      return response.choices[0]?.message?.content || "";
    } catch (error) {
      console.error("Error generating chat completion:", error);
      throw error;
    }
  }

  static async generateImage(prompt) {
    try {
      const response = await groq.image.generations.create({
        prompt,
        model: "image-model", // Replace with the appropriate model name
      });
      return response.data[0]?.url || "";
    } catch (error) {
      console.error("Error generating image:", error);
      throw error;
    }
  }
}

module.exports = GroqAI;
