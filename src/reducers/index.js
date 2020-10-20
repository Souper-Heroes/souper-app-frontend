import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import message from './message';
import auth from './auth';
import item from './item';
import user from './user';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistItemConfig = {
  key: 'item',
  storage,
};

const persistUserConfig = {
  key: 'user',
  storage,
};

export default combineReducers({
  item: persistReducer(persistItemConfig, item),
  message,
  auth: persistReducer(persistConfig, auth),
  user: persistReducer(persistUserConfig, user)
});
