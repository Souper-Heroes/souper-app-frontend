import { combineReducers } from 'redux';

import message from './message';
import auth from './auth';
import item from './item';
import alert from './alert';

export default combineReducers({
  item,
  message,
  auth,
  alert
});
