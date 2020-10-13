import axios from 'axios';
// import configureStore from '../store';
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
  config.headers['x-auth-token'] = await myFirebase
    .auth()
    .currentUser.getIdToken()
    .then(async idToken => {
      return idToken;
    })
    .catch(error => {
      console.log(error);
    });
  return config;
});

/**
 intercept any error responses from the api
 and check if the firebase token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//   res => res,
//   err => {
//     if (err.response.status === 401) {
//       configureStore().dispatch({ type: 'LOGOUT_REQUEST' });
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
