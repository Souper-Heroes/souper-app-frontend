import { applyMiddleware, createStore } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

import { verifyAuth } from './actions/auth';

const middleware = [reduxPromiseMiddleware, reduxThunk];

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  store.dispatch(verifyAuth());
  return store;
}
