import axios from 'axios';
import { myFirebase } from '../firebase/firebase';

let SOUP_API = '';

if (process.env.NODE_ENV !== 'production') {
  SOUP_API = 'http://localhost:5000';
} else {
  SOUP_API = 'https://souper-app-backend.herokuapp.com';
}

const api = axios.create({
  baseURL: `${SOUP_API}/api/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
api.interceptors.request.use(async config => {
  try {
    const user = await myFirebase.auth().currentUser;
    if (user) {
      config.headers['x-auth-token'] = await user.getIdToken();
    }
  } catch (error) {
    console.error(error);
  }
  return config;
});

export default api;
