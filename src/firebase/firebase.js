import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters(
  {
    prompt: 'select_account'
  }
);
export const facebookProvider = new firebase.auth.FacebookAuthProvider().setCustomParameters(
  {
    auth_type: 'reauthenticate'
  }
);
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const db = baseDb;
