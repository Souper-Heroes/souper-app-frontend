import React, { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import ItemListings from 'components/Items/ItemListings.js';
import Layout from 'components/Layout/Layout.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [registerInputs] = useState([
    { id: 'first', label: 'Full Name', type: 'text', icon: 'face' },
    { id: 'second', label: 'Email', type: 'email', icon: 'email' },
    { id: 'third', label: 'Password', type: 'password', icon: 'lock' },
  ]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage registerInputs={registerInputs} />
        </Route>
        <Layout>
          <Route path='/'>
            <ItemListings />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
