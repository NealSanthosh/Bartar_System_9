import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB8mGWN4P4TPaX2O6e9VRJYvYIwZTL2Frw",
  authDomain: "barter-system-12cc4.firebaseapp.com",
  databaseURL: "https://barter-system-12cc4.firebaseio.com",
  projectId: "barter-system-12cc4",
  storageBucket: "barter-system-12cc4.appspot.com",
  messagingSenderId: "151305646070",
  appId: "1:151305646070:web:4267493f032071791a21d7"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
