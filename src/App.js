import React, { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import MyListingsPage from './components/Items/MyListingsPage';
import LandingPage from './views/LandingPage/LandingPage.js';
import ItemListings from 'components/Items/ItemListings.js';
import Page from './components/Page';
import Header from 'components/Layout/Header.js';
import HeaderLinks from 'components/Layout/HeaderLinks.js';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

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
        <Route path='/mylistings'>
          <Header
            brand={<Restaurant />}
            color='rose'
            leftLinks={''}
            rightLinks={<HeaderLinks />}
            fixed
          />
          <Parallax
            small
            filter
            image={require('assets/img/citrus-fruit.jpg')}
          />
          <MyListingsPage />
          <SouperFooter />
        </Route>
        <Route path='/landing'>
          <LandingPage />
        </Route>
        <Route path='/'>
          <Header
            brand={<Restaurant />}
            color='rose'
            leftLinks={''}
            rightLinks={<HeaderLinks />}
            fixed
          />
          <Parallax
            small
            filter
            image={require('assets/img/citrus-fruit.jpg')}
          />
          <ItemListings />
          <SouperFooter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
