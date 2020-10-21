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

/* import { types } from 'actions/user';

const initialState = {};

const profileData = (state = {...initialState}, action) => {
  switch (action.type) {
    case `${types.GET_PROFILE}_FULFILLED`:
      console.log(action.payload.data);
      return { ...state, profile: action.payload.data};
    case `${types.UPDATE_PROFILE}_FULFILLED`:
      console.log(action.payload.data);
      return { ...state, profile: action.payload.data};
    default:
      console.log({action});
      if (action.type.includes('_REJECTED') && [401, 403].includes(action.payload.response.status)) {
        return {...initialState};
      }
  }
  return state;
};

export default profileData; */
