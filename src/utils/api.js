import axios from 'axios';
import { myFirebase } from '../firebase/firebase';

// const { SOUP_API = 'https://souper-app-backend.herokuapp.com' } = process.env;
const { SOUP_API = 'http://localhost:5000' } = process.env;

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
    // eslint-disable-next-line
    console.error(error);
  }
  return config;
});

export default api;
