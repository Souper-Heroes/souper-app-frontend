import { types } from '../actions/item';

const initialState = {
  items: [],
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ITEMS:
      return {
        items: payload
      };
    case types.GET_ITEMS_ERROR:
      return {
        items: payload
      };
    default:
      return state;
  }
};
