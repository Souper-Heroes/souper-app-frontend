/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Restaurant } from '@material-ui/icons';
import ItemViewPage from './components/Items/ItemViewPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestData from 'assets/data/TestData.json';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import MyListingsPage from './components/Items/MyListingsPage';
import LandingPage from './views/LandingPage/LandingPage';
import ItemListings from './components/Items/ItemListings';
// import Page from './components/Page';
import Header from './components/Layout/Header';
import HeaderLinks from './components/Layout/HeaderLinks';
import SouperFooter from './components/Layout/SouperFooter';
import Parallax from './components/MaterialKitComponents/Parallax/Parallax';
import './App.css';

function App() {
  const [data, setData] = useState(TestData);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage registerInputs={data['registerInputs']} />
        </Route>
        <Route path='/itemview'>
          <ItemViewPage item={data['userItems'][0]} />
        </Route>
        <Route path='/mylistings'>
          <Header
            brand={<Restaurant />}
            color='rose'
            leftLinks=''
            rightLinks={<HeaderLinks />}
            fixed
          />
          <Parallax
            small
            filter
            image={require('assets/img/citrus-fruit.jpg')}
          />
          <MyListingsPage
            userProfile={data['userProfile']}
            userItems={data['userItems']}
          />
          <SouperFooter />
        </Route>
        <Route path='/landing'>
          <LandingPage />
        </Route>
        <Route path='/'>
          <Header
            brand={<Restaurant />}
            color='rose'
            leftLinks=''
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
