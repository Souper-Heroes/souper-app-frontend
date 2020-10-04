import {applyMiddleware, createStore} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [reduxPromiseMiddleware, reduxThunk];
export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));
