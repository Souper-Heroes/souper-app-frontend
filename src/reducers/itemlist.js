import { types } from 'actions';
import TestData from 'assets/data/TestData.json';
import _ from 'lodash';
import moment from 'moment';

// TODO remove initialiation from a test file and use axios ?
const initialState = {
  userItems: TestData.userItems,
  userId: TestData.userProfiles[0].userId,
};

const itemlist = (state = { initialState }, action) => {
  switch (action.type) {
    case types.ITEMLIST:
      //get previous state object here annd concatenate new object
      //return { ...state, items: action.items };
      //console.log('state:', state);
      return state.itemlist;
    case types.ADDITEM:
      //get previous state object here annd concatenate new object
      return { ...state, userItems: [...state.userItems, action.item] };

    case types.DELETEITEM:
      //get previous state object here annd concatenate new object
      return {
        ...state,
        userItems: [
          ...state.userItems.filter((item) => item.itemId !== action.itemId),
        ],
      };
    case types.SORTITEM:
      //let newItems = [...state.userItems];

      if (action.menuItem === 'Category') {
        return {
          ...state,
          userItems: [...state.userItems].sort((a, b) => {
            if (a.category > b.category) {
              return 1;
            }
            if (b.category > a.category) {
              return -1;
            }
            return 0;
          }),
        };
      } else {
        //  Sort By Expiry Date
        return {
          ...state,
          userItems: [...state.userItems].sort((a, b) => {
            if (moment(a.expiryDate) > moment(b.expiryDate)) {
              return 1;
            }
            if (moment(b.expiryDate) > moment(a.expiryDate)) {
              return -1;
            }
            return 0;
          }),
        };
      }

    /*case `${types.CHECK}_FULFILLED`:
      return { ...state, message: action.payload.data.message };
    case types.LOGOUT:
      return { ...initialState }; */
    default:
      return { ...initialState };
  }
  // return state;
};

export default itemlist;
