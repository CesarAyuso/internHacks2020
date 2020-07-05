
const express = require('express')
const app = express()
const cors = require('cors');
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyBEztMST_bXE9UYu8ah0RyZJfkuMM6u1C0",
    authDomain: "example321-f5a03.firebaseapp.com",
    databaseURL: "https://example321-f5a03.firebaseio.com",
    projectId: "example321-f5a03",
    storageBucket: "example321-f5a03.appspot.com",
    messagingSenderId: "466481900898",
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const port = 8080;

app.use(express.json());
app.use(cors());

app.post('/createUser', (req, res) => {
    console.log(req.body);
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(data=>res.send('user created!'))
        .catch();
});

app.get('/healthCheck', (req, res) => res.send('hello world'));

let portNumber = process.env.PORT || port;
console.log(`The env variable PORT is : ${process.env.PORT}`);

app.listen(process.env.PORT || port);

