import React, { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import Page from './components/Page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [state, setState] = useState({
    registerInput: [
      { id: 'first', label: 'Full Name', type: 'text', icon: 'face' },
      { id: 'second', label: 'Email', type: 'email', icon: 'email' },
      { id: 'third', label: 'Password', type: 'password', icon: 'lock' },
    ],
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage registerInputs={state['registerInput']} />
        </Route>
        <Route path='/'>
          <Page />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
