import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAE-ofB6uPbZ4gshmNeFI21824n5qfchvs",
  authDomain: "bt3103test.firebaseapp.com",
  databaseURL: "https://bt3103test.firebaseio.com",
  projectId: "bt3103test",
  storageBucket: "bt3103test.appspot.com",
  messagingSenderId: "70833218666",
  appId: "1:70833218666:web:2d341027ece326ebaf5613",
  measurementId: "G-MKMGDWMSE1"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;