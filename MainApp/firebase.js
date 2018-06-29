import * as firebase from 'firebase';
import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDY79TBCvNwjDHbx83BKI50dsoyBM-lcHA",
    authDomain: "mainproject-47543.firebaseapp.com",
    databaseURL: "https://mainproject-47543.firebaseio.com",
    projectId: "mainproject-47543",
    storageBucket: "mainproject-47543.appspot.com",
    messagingSenderId: "492143575979"
  };

  export default !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
