import { types } from 'actions/user';

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

export default profileData;
