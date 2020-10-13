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

const requestLogin = () => ({
  type: LOGIN_REQUEST
});

const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  user
});

const loginError = () => ({
  type: LOGIN_FAILURE
});

const signUpError = message => ({
  type: SIGNUP_FAILURE,
  message
});

const requestLogout = () => ({
  type: LOGOUT_REQUEST
});

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS
});

const logoutError = () => ({
  type: LOGOUT_FAILURE
});

const verifyRequest = () => ({
  type: VERIFY_REQUEST
});

const verifySuccess = () => ({
  type: VERIFY_SUCCESS
});

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  return myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
      return true;
    })
    .catch(() => {
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
    .catch(() => {
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
    .catch(() => {
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
  return myFirebase
    .auth()
    .currentUser.getIdToken()
    .catch(error => {
      dispatch(signUpError(error.message));
    });
};
