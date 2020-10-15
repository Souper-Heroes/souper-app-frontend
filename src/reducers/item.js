import moment from 'moment';
import { types } from '../actions/item';

const initialState = {
  items: [
    {
      itemId: 1,
      provideUserId: 1,
      collectUserId: 2,
      photoId: '#1111',
      title: '5 Squashy Bananas',
      category: 'Fruit',
      description: 'Been in my bag, only one end is squishy.',
      expiryDate: '2020-10-23T16:00:00Z',
      location: 'EN4 4QE',
      preferredProvideStartTime: '2020-10-23T16:00:00Z',
      preferredProvideEndTime: '2020-10-23T18:00:00Z',
      preferredCollectStartTime: '2020-10-23T16:00:00Z',
      preferredCollectEndTime: '2020-10-23T18:00:00Z',
      reservedItem: 'false'
    },
    {
      itemId: 2,
      provideUserId: 2,
      collectUserId: 3,
      photoId: '#1112',
      title: 'Cashew nuts',
      category: 'Nuts',
      description: 'Unopened but the packet is a bit battered',
      expiryDate: '2020-10-24T13:00:00Z',
      location: 'SR5 4TQ',
      preferredProvideStartTime: '2020-10-24T13:00:00Z',
      preferredProvideEndTime: '2020-10-24T17:30:00Z',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 3,
      provideUserId: 2,
      collectUserId: 3,
      photoId: '#1113',
      title: '6 Chicken Wings',
      category: 'Meat',
      description: "Cooked yesterday, I don't want them.",
      expiryDate: '2020-11-30T13:00:00Z',
      location: 'EN4 4QE',
      preferredProvideStartTime: '2020-11-24T13:00:00Z',
      preferredProvideEndTime: '2020-12-15T17:30:00Z',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 4,
      provideUserId: 1,
      collectUserId: 2,
      photoId: '#1114',
      title: 'Potatoes',
      category: 'Vegtables',
      description: 'Half a bag of Potatoes roots growing',
      expiryDate: '2020-06-30T14:30:00Z',
      location: 'DE3 7TE',
      preferredProvideStartTime: '2020-06-28T14:30:00Z',
      preferredProvideEndTime: '2020-06-28T19:30:00Z',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 5,
      provideUserId: 3,
      collectUserId: null,
      photoId: '#1115',
      title: '10 Leeks',
      category: 'Vegetables',
      description: '10 Leeks picked from my garden 5 days ago',
      expiryDate: '2020-12-29T13:00:00Z',
      location: 'SL3 7TEC',
      preferredProvideStartTime: '2020-12-26T13:00:00Z',
      preferredProvideEndTime: '2020-12-26T15:00:00Z',
      preferredCollectStartTime: '2020-12-26T16:30:00Z',
      preferredCollectEndTime: '2020-12-26T22:00:00Z',
      reservedItem: 'false'
    },
    {
      itemId: 6,
      provideUserId: 2,
      collectUserId: null,
      photoId: '#1116',
      title: 'Soup',
      category: 'Canned Food',
      description: '2 Tins Of Baxters Carrot And Corriander Soup',
      expiryDate: '2020-12-03T17:30:00Z',
      location: 'SP3 7XE',
      preferredProvideStartTime: '2020-12-02T17:30:00Z',
      preferredProvideEndTime: '2020-12-02T20:00:00Z',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 7,
      provideUserId: 2,
      collectUserId: 1,
      photoId: '#1117',
      title: 'Soup',
      category: 'Canned Food',
      description: '2 Tins Of Baxters Carrot And Corriander Soup',
      expiryDate: '2020-12-03T17:30:00Z',
      location: 'SP3 7XE',
      preferredProvideStartTime: '2020-12-02T16:00:00Z',
      preferredProvideEndTime: '2020-12-24T20:00:00Z',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 8,
      provideUserId: 3,
      collectUserId: 1,
      photoId: '#1115',
      title: '10 Leeks',
      category: 'Vegetables',
      description: '10 Leeks picked from my garden 5 days ago',
      expiryDate: '2020-12-29T17:30:00Z',
      location: 'SL3 7TE',
      preferredProvideStartTime: '2020-12-26T10:30:00Z',
      preferredProvideEndTime: '2020-12-26T20:00:00Z',
      preferredCollectStartTime: '2020-12-26T10:00:00Z',
      preferredCollectEndTime: '2020-12-26T22:00:00Z',
      reservedItem: 'false'
    },
    {
      itemId: 9,
      provideUserId: 1,
      collectUserId: 2,
      photoId: '#1114',
      title: 'Potatoes',
      category: 'Baked Goods',
      description: 'Half a bag of Potatoes roots growing',
      expiryDate: '2020-04-30T17:30:00Z',
      location: 'DE3 7TE',
      preferredProvideStartTime: '2020-04-28T10:00:00Z',
      preferredProvideEndTime: '2020-04-22T15:00:00Z',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    }
  ]
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
    case types.UPDATE_COLLECTDATES:
      return {
        // TODO should call axios api function to update bbackend with new preferred Collect time for item
        ...state,
        // Only new objects can be created and assigned to the state, thats why we use [...]
        items: [
          ...state.items.map(myItem => {
            // console.log('***FOUND MY ITEM:', myItem, action);
            if (myItem.itemId === action.itemId) {
              // console.log( 'FOUND MY ITEM:', myItem.preferredCollectStartTime, action);
              const updItem = myItem;
              updItem.preferredCollectStartTime = action.collectionStartDateTime;
              updItem.preferredCollectEndTime = action.collectionStartDateTime;
              return updItem;
            }
            return myItem;
          })
          // items: [...state.items.filter(item => item.itemId === action.itemId).map(),],
        ],
        success: true
      };
    case types.DELETEITEM:
      return {
        ...state,
        items: [
          ...state.items.filter(myItem => myItem.itemId !== action.itemId)
        ]
      };
    case types.SORTITEM:
      if (action.menuItem === 'Category') {
        return {
          ...state,
          items: [...state.items].sort((a, b) => {
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
      //  Sort By Expiry Date
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          if (moment(a.expiryDate) > moment(b.expiryDate)) {
            return 1;
          }
          if (moment(b.expiryDate) > moment(a.expiryDate)) {
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
