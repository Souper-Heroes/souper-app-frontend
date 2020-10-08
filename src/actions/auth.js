import axios from 'axios';

const SOUP_API = 'https://souper-app-backend.herokuapp.com';

// export const login = (email, password) => ({
//     type: types.LOGIN,
//     payload: axios.post(`${SOUP_API}/login`, {email, password})
// });

// export const logout = () => dispatch => dispatch({
//     type: types.LOGOUT
// });

// export const check = () => (dispatch, getState) => dispatch(({
//     type: types.CHECK,
//     payload: axios.get(`${SOUP_API}/check`, {headers: { Authorization: getState().auth.jwt}})
// }));

export const types = {
  LOGIN: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK: 'CHECK'
};

export const login = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: types.LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: types.LOGIN_ERROR, err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: types.LOGOUT_SUCCESS });
      });
  };
};
