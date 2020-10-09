import { types } from 'actions';
import TestData from 'assets/data/TestData.json';

// ToDO remove initialiation from a test file
const initialState = {
  userItems: TestData.userItems,
  userId: TestData.userProfiles[0].userId,
};

const itemlist = (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.ITEMLIST:
      //get previous state object here annd concatenate new object
      //return { ...state, items: action.items };
      console.log('state:', state);
      return state.itemlist;
    case types.ADDITEM:
      //get previous state object here annd concatenate new object
      return { ...state, items: [...state.items, action.item] };

    /*case `${types.CHECK}_FULFILLED`:
      return { ...state, message: action.payload.data.message };
    case types.LOGOUT:
      return { ...initialState }; */
    /*default:
      return { ...initialState }; */
  }
  return state;
};

export default itemlist;
