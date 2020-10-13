import { myFirebase, googleProvider } from '../firebase/firebase';
import api from '../utils/api';

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

const requestLogin = () => {
  return {
    type: types.LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: types.LOGIN_SUCCESS,
    user
  };
};

const userLoaded = user => {
  return {
    type: types.USER_LOADED,
    user
  };
};

const userLoadError = () => {
  return {
    type: types.USER_LOAD_FAILURE
  };
};

const loginError = () => {
  return {
    type: types.LOGIN_FAILURE
  };
};

const signUpError = message => {
  return {
    type: types.SIGNUP_FAILURE,
    message
  };
};

const requestLogout = () => {
  return {
    type: types.LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: types.LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: types.LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: types.VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: types.VERIFY_SUCCESS
  };
};

// Load User
export const loadUser = () => async dispatch => {
  try {
    let res = await api.get('/users');
    if (!res.data) {
      res = await api.post('/users');
    }
    dispatch(userLoaded(res.data));
  } catch (err) {
    dispatch(userLoadError());
  }
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(loadUser());
    })
    .then(user => {
      dispatch(receiveLogin(user));
      dispatch(loadUser());
    })
    .catch(error => {
      dispatch(loginError());
    });
};

export const loginWithGoogle = () => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(() => {
      dispatch(loadUser());
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      // Do something with the error
      dispatch(signUpError());
    });
};

export const signUp = (email, password, displayName) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.user.updateProfile({
        displayName
      });
    })
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      dispatch(signUpError(error.message));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      // Do something with the error
      dispatch(logoutError());
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
