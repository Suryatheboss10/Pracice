var firebaseConfig = {
    apiKey: "AIzaSyBnA8tAdZCisT76iDpZF6iWtLZGBwmX8eE",
    authDomain: "kwitter-f80f8.firebaseapp.com",
    databaseURL: "https://kwitter-f80f8-default-rtdb.firebaseio.com",
    projectId: "kwitter-f80f8",
    storageBucket: "kwitter-f80f8.appspot.com",
    messagingSenderId: "239743141493",
    appId: "1:239743141493:web:9f1a76fcef2f2dd1205a3c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    username = document.getElementById("user_name").value
    firebase.database().ref("/").child(username).update({
        purpose: "adding user"
    });
}