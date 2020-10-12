import { myFirebase } from '../firebase/firebase';
import axios from 'axios';

export const types = {
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR'
};

const SOUP_API = 'http://localhost:5000';

// const SOUP_API = 'https://souper-app-backend.herokuapp.com';

export const getItems = () => async dispatch => {
  try {
    myFirebase
      .auth()
      .currentUser.getIdToken()
      .then(async idToken => {
        const res = await axios.get(`${SOUP_API}/api/items`, {
          headers: { 'x-auth-token': idToken }
        });
        dispatch({
          type: types.GET_ITEMS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: types.GET_ITEMS_ERROR
        });
      });
  } catch (err) {
    // do something with error
    console.log(err);
    dispatch({
      type: types.GET_ITEMS_ERROR
    });
  }
};
