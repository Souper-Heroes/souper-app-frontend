import { applyMiddleware, createStore } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';
import firebase, { config as fbConfig } from './config/fbConfig';

const middleware = [
  reduxPromiseMiddleware,
  reduxThunk.withExtraArgument({ getFirebase, getFirestore })
];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch
};

export const persistor = persistStore(store);
