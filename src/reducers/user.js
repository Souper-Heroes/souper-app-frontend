import { types as authTypes } from '../actions/auth';
import { types } from '../actions/user';

export default (
  state = {
    user: {},
    userLoadedError: false
  },
  action
) => {
  switch (action.type) {
    case types.USER_LOADED:
      return {
        ...state,
        user: action.user
      };
    case types.USER_LOAD_FAILURE:
      return {
        ...state,
        userLoadedError: true
      };
    case authTypes.LOGOUT_SUCCESS:
      return {
        user: {},
        userLoadedError: false
      };
    default:
      return state;
  }
};
