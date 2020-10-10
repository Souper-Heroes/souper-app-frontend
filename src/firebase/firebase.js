import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDflmiKPEv1rDmF6xBwVXINbqxHphElC8M',
  authDomain: 'souperheroes-32ce8.firebaseapp.com',
  databaseURL: 'https://souperheroes-32ce8.firebaseio.com',
  projectId: 'souperheroes-32ce8',
  storageBucket: 'souperheroes-32ce8.appspot.com',
  messagingSenderId: '709415909284',
  appId: '1:709415909284:web:64ab5ba5a35bc2856bb331'
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters(
  {
    prompt: 'select_account'
  }
);
export const db = baseDb;
