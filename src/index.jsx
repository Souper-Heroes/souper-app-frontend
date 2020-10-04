// import React from "react";
// import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";

import 'assets/scss/material-kit-react.scss?v=1.9.0';

// // pages for this product
// import Components from "views/Components/Components";
// import LandingPage from "views/LandingPage/LandingPage";
// import ProfilePage from "views/ProfilePage/ProfilePage";
// import LoginPage from "views/LoginPage/LoginPage";

// var hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/landing-page" component={LandingPage} />
//       <Route path="/profile-page" component={ProfilePage} />
//       <Route path="/login-page" component={LoginPage} />
//       <Route path="/" component={Components} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [reduxPromiseMiddleware];
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
