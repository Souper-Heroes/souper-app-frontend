import 'assets/scss/material-kit-react.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor, rrfProps } from './store';
import * as serviceWorker from './serviceWorker';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </PersistGate>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
