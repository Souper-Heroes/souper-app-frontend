import { types } from '../actions/auth';

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    signUpError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {},
    userLoaded: {},
    userLoadedError: false
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
        signUpError: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
      };
    case types.USER_LOADED:
      return {
        ...state,
        userLoaded: action.user
      };
    case types.USER_LOAD_FAILURE:
      return {
        ...state,
        userLoadedError: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        signUpError: null
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: false,
        signUpError: action.message
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case types.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case types.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    default:
      return state;
  }
};
