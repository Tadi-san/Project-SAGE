// // Import the functions you need from the SDKs you need
// // const firebase = require('firebase/app');
// import firebase from 'firebase/app';
// require('firebase/auth');
// require('firebase/database');
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAgC7KCKIkHVK55PpUSuE5WVVsgtfIWUC8',
//   authDomain: 'hearts-36da3.firebaseapp.com',
//   databaseURL: 'https://hearts-36da3-default-rtdb.firebaseio.com',
//   projectId: 'hearts-36da3',
//   storageBucket: 'hearts-36da3.appspot.com',
//   messagingSenderId: '318456524749',
//   appId: '1:318456524749:web:9ca832486cf649e3eb5e84',
//   measurementId: 'G-V3HTRGDLMP',
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth = app.auth();
// // const analytics = getAnalytics(app);


// // Initialize the Firebase app
// const app = firebase.initializeApp(firebaseConfig);

// // Get the necessary Firebase services
// const auth = firebase.auth();
// const database = firebase.database();
// module.exports = {
//   app,
//   auth,
//   analytics,
//   //(if you need to export it as well)
// };




// Import the necessary Firebase modules
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgC7KCKIkHVK55PpUSuE5WVVsgtfIWUC8",
  authDomain: "hearts-36da3.firebaseapp.com",
  databaseURL: "https://hearts-36da3-default-rtdb.firebaseio.com",
  projectId: "hearts-36da3",
  storageBucket: "hearts-36da3.appspot.com",
  messagingSenderId: "318456524749",
  appId: "1:318456524749:web:9ca832486cf649e3eb5e84",
  measurementId: "G-V3HTRGDLMP"
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




