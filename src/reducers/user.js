import { types } from '../actions/user';

const initialState = {
  address: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_ADDRESS:
      return {
        ...state,
        address: payload,
        addrstatus: payload.status
      };
    case types.GET_USER_ADDRESS_ERROR:
      return {
        ...state,
        address: payload,
        addrstatus: payload.status
      };

    default:
      return state;
  }
  // return state;
};
