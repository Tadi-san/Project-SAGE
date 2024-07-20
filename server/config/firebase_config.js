
// Import the necessary Firebase modules
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: ""="",
  authDomain: "",
  databaseURL:"",
  projectId: "",
  storageBucket:"",
    messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize the Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Get the necessary Firebase services
const auth = firebase.auth;



// Export the necessary values
module.exports = {
  app,
  auth
};




