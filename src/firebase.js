import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBFX3ZlzE3tZzWSk8U-S_J2-rhkuhuENfU",
  authDomain: "groceryaxios-e72ff.firebaseapp.com",
  databaseURL: "https://groceryaxios-e72ff.firebaseio.com",
  projectId: "groceryaxios-e72ff",
  storageBucket: "groceryaxios-e72ff.appspot.com",
  messagingSenderId: "728809931379",
  appId: "1:728809931379:web:b49ddd8881686bb6e7a006",
  measurementId: "G-R4YF2LYSJG"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;