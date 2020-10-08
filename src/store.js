import {applyMiddleware, createStore} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

const middleware = [reduxPromiseMiddleware, reduxThunk];

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export const persistor = persistStore(store);
