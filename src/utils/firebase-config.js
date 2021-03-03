import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQrnnpuqZo3BpXZO_RanyXkpWNP4gcpvc",
    authDomain: "gran-foro.firebaseapp.com",
    databaseURL: "https://gran-foro.firebaseio.com",
    projectId: "gran-foro",
    storageBucket: "gran-foro.appspot.com",
    messagingSenderId: "621329251387",
    appId: "1:621329251387:web:2d1f99349fbeefd755701e",
    measurementId: "G-06GKK9K9DV"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  const auth = fire.auth();

  export {
      db,
      googleAuthProvider,
      facebookAuthProvider,
      firebase
      
  }




