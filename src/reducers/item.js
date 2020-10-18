import moment from 'moment';
import { types } from '../actions/item';

const initialState = {
  pitems: null,
  citems: null,
  myitems: [],
  loading: true,
  items: [
    {
      _id: '1',
      user_uid: '1',
      c_user_uid: '2',
      title: '5 Squashy Bananas',
      category: ['Fruit'],
      description: 'Been in my bag, only one end is squishy.',
      photo: '#1111',
      expiry: '2020-10-23T16:00:00Z',
      location: 'EN4 4QE',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '2',
      user_uid: '2',
      c_user_uid: '3',
      title: 'Cashew nuts',
      category: ['Nuts'],
      description: 'Unopened but the packet is a bit battered',
      photo: '#1112',
      expiry: '2020-10-24T13:00:00Z',
      location: 'SR5 4TQ',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '3',
      user_uid: '2',
      c_user_uid: '3',
      title: '6 Chicken Wings',
      category: ['Meat'],
      description: "Cooked yesterday, I don't want them.",
      photo: '#1113',
      expiry: '2020-11-30T13:00:00Z',
      location: 'EN4 4RE',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '4',
      user_uid: '1',
      c_user_uid: '2',
      title: 'Potatoes',
      category: ['Vegtables'],
      description: 'Half a bag of Potatoes roots growing',
      photo: '#1114',
      expiry: '2020-06-30T14:30:00Z',
      location: 'DE3 7TQ',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '5',
      user_uid: '3',
      c_user_uid: null,
      title: '10 Leeks',
      category: ['Vegetables'],
      description: '10 Leeks picked from my garden 5 days ago',
      photo: '#1115',
      expiry: '2020-12-29T13:00:00Z',
      location: 'SL3 7TC',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '6',
      user_uid: '2',
      c_user_uid: null,
      title: 'Soup',
      category: ['Canned Food'],
      description: '2 Tins Of Baxters Carrot And Corriander Soup',
      photo: '#1116',
      expiry: '2020-12-03T17:30:00Z',
      location: 'SP3 7XE',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '7',
      user_uid: '2',
      c_user_uid: '1',
      title: 'Soup',
      category: ['Canned Food'],
      description: '2 Tins Of Baxters Carrot And Corriander Soup',
      photo: '#1117',
      expiry: '2020-12-03T17:30:00Z',
      location: 'SP3 7QE',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '8',
      user_uid: '3',
      c_user_uid: '1',
      title: '10 Leeks',
      category: ['Vegetables'],
      description: '10 Leeks picked from my garden 5 days ago',
      photo: '#1115',
      expiry: '2020-12-29T17:30:00Z',
      location: 'SL3 9TE',
      availability: '23rd Oct 2020 3-4PM',
    },
    {
      _id: '9',
      user_uid: '1',
      c_user_uid: null,
      title: 'Potatoes',
      category: ['Baked Goods'],
      description: 'Half a bag of Potatoes roots growing',
      photo: '#1114',
      expiry: '2020-04-30T17:30:00Z',
      location: 'DE3 3TQ',
      availability: '23rd Oct 2020 3-4PM',
    },
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case types.GET_MY_ITEMS:
      return {
        ...state,
        myitems: payload,
        loading: false,
      };
    case types.GET_PROVIDER_ITEMS:
      return {
        ...state,
        pitems: payload,
      };
    case types.GET_COLLECTOR_ITEMS:
      return {
        ...state,
        citems: payload,
      };
    case types.GET_ITEMS_ERROR:
      return {
        items: payload,
      };
    case types.UPDATE_COLLECTDATES:
      return {
        // TODO should call axios api function to update bbackend with new preferred Collect time for item
        ...state,
        // Only new objects can be created and assigned to the state, thats why we use [...]
        items: [
          ...state.items.map(myItem => {
            // console.log('***FOUND MY ITEM:', myItem, action);
            if (myItem._id === action._id) {
              // console.log( 'FOUND MY ITEM:', myItem.preferredCollectStartTime, action);
              const updItem = myItem;
              updItem.availability = action.availability;
              return updItem;
            }
            return myItem;
          }),
          // items: [...state.items.filter(item => item._id === action._id).map(),],
        ],
        success: true,
      };
    case types.UNRESERVE_ITEM:
      return {
        // TODO should call axios api function to update bbackend with new preferred Collect time for item
        ...state,
        myitems: state.myitems.filter((item) => item._id !== payload._id),
        success: true,
        citem : payload
        
      };
    case types.RESERVE_ITEM:
      return {
        // TODO should call axios api function to update bbackend with new preferred Collect time for item
        ...state,
        myitems: [
          ...state.myitems.map(myItem => {
            if (myItem._id === payload._id) {
              const updItem = myItem;
              updItem.c_user_uid = payload.c_user_id;
              return updItem;
            }
            return myItem;
          }),
        ],
        success: true,
        citem : payload
      };
    case types.DELETEITEM:
      return {
        ...state,
        mytems: [...state.myitems.filter(myItem => myItem._id !== action._id)],
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
          }),
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
        }),
      };

    default:
      return state;
  }
  // return state;
};
