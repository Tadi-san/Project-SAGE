const express = require('express');
const AIModel = require('./config/model');
require('dotenv').config();

const app = express();
const port = 5000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const quizeroutes = require('./routes/quizes');
const imageroutes = require('./routes/image_gen');
const summurizeroutes = require('./routes/summurize');
const chatroutes = require('./routes/chat');

app.use('/api/', quizeroutes);
app.use('/api/', imageroutes);
app.use('/api/', summurizeroutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
