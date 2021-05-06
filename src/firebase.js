import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFRaTIwRJnMChAKkkLAll53MkELi2k4GY",
    authDomain: "fir-1141c.firebaseapp.com",
    projectId: "fir-1141c",
    storageBucket: "fir-1141c.appspot.com",
    messagingSenderId: "118263711203",
    appId: "1:118263711203:web:a8da3f0fed3289e9da0cd6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };