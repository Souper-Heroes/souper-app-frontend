import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { firebaseReducer } from 'react-redux-firebase';
import storage from 'redux-persist/lib/storage';

import message from './message';
import item from './item';
import auth from './auth';

const persistConfig = {
  key: 'auth',
  storage
};

export default combineReducers({
  item,
  message,
  auth: persistReducer(persistConfig, auth),
  firebase: firebaseReducer
});
