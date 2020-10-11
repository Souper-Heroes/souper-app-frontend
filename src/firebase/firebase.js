import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters(
  {
    prompt: 'select_account'
  }
);
export const db = baseDb;
