import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import message from './message';
import auth from './auth';


const persistConfig = {
    key: 'auth',
    storage,
};

export default combineReducers({
    message,
    auth: persistReducer(persistConfig, auth)
});
