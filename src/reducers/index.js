import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import message from './message';
import auth from './auth';
import item from './item';

import alert from './alert';

import user from './user';

const persistConfig = {
  key: 'user',
  storage
};

export default combineReducers({
  item,
  message,
  auth,
  alert,
  user: persistReducer(persistConfig, user)
});
