const AIModel = require('../config/model');
const express = require('express');
const router = express.Router();
require('dotenv').config();


const https = require('https');
const querystring = require('querystring');

// Replace with your actual Freepik API key
const apiKey = process.env.Freepik_API_key;

function searchFreepikImages(searchTerm, page = 1, pageSize = 20) {

    const baseUrl = 'https://api.freepik.com/v1/resources'; // Consider using v2 for latest API
    const options = {
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US',
        'x-freepik-api-key': apiKey
      }
    };
  
    const limit = 5; // Maintain the limit
    const url = `${baseUrl}?term=${searchTerm}&page=${page}&limit=${limit}`;
  
    return fetch(url, options)
      .then(response => response.json())
      .then(response => response) // Return the entire response object
      .catch(err => console.error(err));
  }
  

router.post('/find_image', async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm || 'a cat'; // Provide a default search term
    console.log(searchTerm);

    // Wait for the promise from searchImages to resolve
    const firstImageUrl = await searchFreepikImages(searchTerm);

    if (firstImageUrl) {
        console.log(firstImageUrl.data[0].image.source); 
        const dd  = firstImageUrl.data[0].image.source;
      res.json(dd);
    } else {
      res.status(404).json({ message: 'No images found for the search term.' });
    }
  } catch (error) {
    console.error('Error finding image:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while finding the image.' });
  }
});


// comming soon not enough time
// router.post('/generate_image', async (req, res) => {
//     try {
//       const prompt = req.query.prompt || 'a futuristic cityscape';
//       const imageUrl = await AIModel.generateImage(prompt);
//       res.json({ imageUrl });
//     } catch (error) {
//       console.error('Error generating image:', error);
//       res.status(500).send('An error occurred while generating the image.');
//     }
//   });



module.exports = router;
