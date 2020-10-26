import moment from 'moment';
import { types } from '../actions/item';
import { types as authTypes } from '../actions/auth';

const initialState = {
  myitems: [],
  loading: true,
  items: [],
  search: {
    paginatedResults: [],
    totalCount: 0
  },
  categoryOptions: [
    { title: 'Nuts' },
    { title: 'Fruit' },
    { title: 'Dairy' },
    { title: 'Fish' },
    { title: 'Meat' },
    { title: 'Cereal' },
    { title: 'Fresh' },
    { title: 'Cooked' },
    { title: 'Raw' },
    { title: 'Frozen' },
    { title: 'Dried' },
    { title: 'Tinned' },
    { title: 'Packet' }
  ],
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authTypes.LOGOUT_SUCCESS:
      return {
        ...initialState,
        loading: false
      };
    case types.SEARCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.SEARCH_ITEMS:
      return {
        ...state,
        search: {
          paginatedResults: payload[0].paginatedResults.length
            ? payload[0].paginatedResults
            : [],
          totalCount: payload[0].paginatedResults.length
            ? payload[0].totalCount[0].count
            : 0
        },
        loading: false
      };
    case types.SEARCH_ITEMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case types.GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case types.GET_MY_ITEMS:
      return {
        ...state,
        myitems: payload,
        loading: false
      };
    case types.GET_ITEMS_ERROR:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case types.GET_DELETE_ITEM_ERROR:
      return {
        ...state,
        msg: payload.msg
      };
    case types.UPDATE_COLLECTDATES:
      return {
        // TODO should call axios api function to update backend with new preferred Collect time for item
        ...state,
        // Only new objects can be created and assigned to the state, thats why we use [...]
        items: [
          ...state.items.map(myItem => {
            if (myItem._id === action._id) {
              const updItem = myItem;
              updItem.availability = action.availability;
              return updItem;
            }
            return myItem;
          })
          // items: [...state.items.filter(item => item._id === action._id).map(),],
        ],
        success: true
      };
    case types.UNRESERVE_ITEM:
      return {
        ...state,
        myitems: state.myitems.filter(item => item._id !== payload._id),
        success: true,
        citem: payload
      };
    case types.RESERVE_ITEM:
      return {
        ...state,
        myitems: [
          ...state.myitems.map(myItem => {
            if (myItem._id === payload._id) {
              const updItem = myItem;
              updItem.c_user_uid = payload.c_user_id;
              return updItem;
            }
            return myItem;
          })
        ],
        success: true,
        citem: payload
      };
    case types.DELETEITEM:
      return {
        ...state,
        myitems: state.myitems.filter(item => item._id !== action._id),
        msg: payload.msg
      };
    case types.SORTITEM:
      if (action.menuItem === 'Category') {
        return {
          ...state,
          myitems: [...state.myitems].sort((a, b) => {
            if (a.category > b.category) {
              return 1;
            }
            if (b.category > a.category) {
              return -1;
            }
            return 0;
          })
        };
      }
      // Sort By Expiry Date
      return {
        ...state,
        myitems: [...state.myitems].sort((a, b) => {
          if (moment(a.expiry) > moment(b.expiry)) {
            return 1;
          }
          if (moment(b.expiry) > moment(a.expiry)) {
            return -1;
          }
          return 0;
        })
      };

    default:
      return state;
  }
  // return state;
};
