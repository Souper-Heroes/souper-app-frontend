import { types } from 'actions';
import TestData from 'assets/data/TestData.json';

// ToDO remove initialiation from a test file
const initialState = { items: TestData.userItems };

const itemList = (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.ITEMVIEW:
      return { ...state, itemId: action.itemId };
    /*case `${types.CHECK}_FULFILLED`:
      return { ...state, message: action.payload.data.message };
    case types.LOGOUT:
      return { ...initialState }; */
    default:
      return { ...initialState };
  }
  return state;
};

export default itemList;
