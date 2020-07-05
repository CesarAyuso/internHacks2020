import React from 'react';
import axios from 'axios';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

 // Initialize Firebase

 var config = {
    apiKey: "AIzaSyBEztMST_bXE9UYu8ah0RyZJfkuMM6u1C0",
    authDomain: "example321-f5a03.firebaseapp.com",
    databaseURL: "https://example321-f5a03.firebaseio.com",
    projectId: "example321-f5a03",
    storageBucket: "example321-f5a03.appspot.com",
    messagingSenderId: "466481900898",
  };
  firebase.initializeApp(config);

  axios.post('/login', {
    firstName: 'Finn',
    lastName: 'Williams'
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
function test(){
    let emailInput = document.getElementById('email');
    alert(`Your email is ${emailInput.value}`)
    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        //url: 'http://example.com/finishSignUp?cartId=1234',
        url: 'http://localhost:3000/createUser2?cartId=1234',
        // This must be true.
        handleCodeInApp: true
    }

    firebase.auth().sendSignInLinkToEmail(emailInput.value, actionCodeSettings)
        .then(function() {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', emailInput.value);
        })
        .catch(function(error) {
            // Some error occurred, you can inspect the code: error.code
        });

}

function CreateUser() {
    return (
      <div>
        <h2>CreateUser</h2>
        <input id="email" type="email"/>
        <div></div>
        <button onClick={test}>click me</button>
      </div>
    );
  }

export default CreateUser;

// const express = require('express')
// const app = express()
// const cors = require('cors');
// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// var firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

//  var firebaseConfig = {
//     apiKey: "AIzaSyBEztMST_bXE9UYu8ah0RyZJfkuMM6u1C0",
//     authDomain: "example321-f5a03.firebaseapp.com",
//     databaseURL: "https://example321-f5a03.firebaseio.com",
//     projectId: "example321-f5a03",
//     storageBucket: "example321-f5a03.appspot.com",
//     messagingSenderId: "466481900898",
//   };
//   firebase.initializeApp(firebaseConfig);
  
//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const port = 8080;

// app.use(express.json());
// app.use(cors());

// app.post('/createUser', (req, res) => {
//     console.log(req.body);
//     firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
//         .then(data=>res.send('user created!'))
//         .catch();
// });

// app.get('/healthCheck', (req, res) => res.send('hello world'));
// app.listen(port);