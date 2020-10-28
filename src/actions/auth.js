import {
  myFirebase,
  googleProvider,
  facebookProvider,
  twitterProvider
} from '../firebase/firebase';
import api from '../utils/api';
import { setAlert } from './alert';
import { userLoaded, userLoadError } from './user';

export const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',

  USER_LOADED: 'USER_LOADED',
  USER_LOAD_FAILURE: 'USER_LOAD_FAILURE',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',

  VERIFY_REQUEST: 'VERIFY_REQUEST',
  VERIFY_SUCCESS: 'VERIFY_SUCCESS'
};

const requestLogin = () => ({
  type: types.LOGIN_REQUEST
});

const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  user
});

const loginError = () => ({
  type: types.LOGIN_FAILURE
});

const signUpError = () => ({
  type: types.SIGNUP_FAILURE
});

const requestLogout = () => ({
  type: types.LOGOUT_REQUEST
});

const receiveLogout = () => ({
  type: types.LOGOUT_SUCCESS
});

const logoutError = () => ({
  type: types.LOGOUT_FAILURE
});

const verifyRequest = () => ({
  type: types.VERIFY_REQUEST
});

const verifySuccess = () => ({
  type: types.VERIFY_SUCCESS
});

// Load User
export const loadUser = user => async dispatch => {
  try {
    let res = await api.get('/users');
    if (!res.data) {
      res = await api.post('/users', user.user);
    }
    dispatch(userLoaded(res.data));
  } catch (err) {
    dispatch(userLoadError());
  }
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  return myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(loadUser(user));
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(() => {
      dispatch(setAlert('incorrect email or password', 'danger', 'text'));
      dispatch(loginError());
    });
};

export const loginWithGoogle = () => dispatch => {
  dispatch(requestLogin());
  return myFirebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(user => {
      dispatch(loadUser(user));
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      // eslint-disable-next-line
      console.error({ error });
      // Do something with the error
      dispatch(loginError());
    });
};

export const loginWithFacebook = () => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then(user => {
      dispatch(loadUser(user));
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      dispatch(setAlert(error.message, 'danger', 'text'));
      dispatch(loginError());
    });
};

export const loginWithTwitter = () => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithPopup(twitterProvider)
    .then(user => {
      dispatch(loadUser(user));
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      dispatch(setAlert(error.message, 'danger', 'text'));
      dispatch(loginError());
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
      const userDetails = {
        user: {
          displayName
        }
      };
      dispatch(loadUser(userDetails));
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      dispatch(signUpError());
      dispatch(setAlert(error.message, 'danger', 'text'));
    });
};

export const passwordReset = email => dispatch => {
  myFirebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      dispatch(
        setAlert(
          'Email Sent! You should recieve an email shortly, follow the link inside to reset your password.',
          'danger',
          'text'
        )
      );
    })
    .catch(error => {
      dispatch(setAlert(error.message, 'danger', 'text'));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  return myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(() => {
      // Do something with the error
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  return myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
