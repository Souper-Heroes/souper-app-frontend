// import axios from 'axios';

// const SOUP_API = 'https://souper-app-backend.herokuapp.com';

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

import { myFirebase, googleProvider } from '../firebase/firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const signUpError = message => {
  return {
    type: SIGNUP_FAILURE,
    message
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  return myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
      return true;
    })
    .catch(error => {
      dispatch(loginError());
      return false;
    });
};

export const loginWithGoogle = () => dispatch => {
  dispatch(requestLogin());
  return myFirebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(user => {
      dispatch(receiveLogin(user));
      return true;
    })
    .catch(error => {
      // Do something with the error
      dispatch(signUpError());
      return false;
    });
};

export const signUp = (email, password, displayName) => dispatch => {
  dispatch(requestLogin());
  return myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.user.updateProfile({
        displayName
      });
    })
    .then(user => {
      dispatch(receiveLogin(user));
      return true;
    })
    .catch(error => {
      dispatch(signUpError(error.message));
      return false;
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  return myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
      return true;
    })
    .catch(error => {
      // Do something with the error
      dispatch(logoutError());
      return false;
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};

export const getToken = () => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .currentUser.getIdToken()
    .then(idToken => {
      console.log(idToken);
    })
    .catch(error => {
      dispatch(signUpError(error.message));
    });
};
