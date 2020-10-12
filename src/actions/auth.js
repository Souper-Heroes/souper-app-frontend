import { myFirebase, googleProvider } from '../firebase/firebase';

export const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',

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
  myFirebase
    .auth()
    .currentUser.getIdToken()
    .then(idToken => {
      console.log(idToken);
    })
    .catch(error => {
      // do something with error
    });
};
