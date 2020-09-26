/* eslint-disable react/jsx-filename-extension */
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
  const [state, setState] = useState({
    registerInputs: [
      {
        id: 'first',
        label: 'Full Name',
        type: 'text',
        icon: 'face',
      },
      {
        id: 'second',
        label: 'Email',
        type: 'email',
        icon: 'email',
      },
      {
        id: 'third',
        label: 'Password',
        type: 'password',
        icon: 'lock',
      },
    ],

    userItems: [
      {
        itemId: '1',
        userId: '1',
        photoId: '#1111',
        type: 'p',
        category: 'Fruit',
        description: '5 Squashy Bananas',
        expiry: '23/10/2020',
        location: 'EN4 4QE',
        collectionTime: '23/10/2020 4PM-6PM',
      },
      {
        itemId: '2',
        userId: '1',
        photoId: '#1112',
        type: 'p',
        category: 'Nuts',
        description: 'Bag of Cashew Nuts',
        expiry: '24/10/2020',
        location: 'SR5 4TQ',
        collectionTime: '24/10/2020 10:30AM-5:50PM',
      },
      {
        itemId: '3',
        userId: '1',
        photoId: '#1113',
        type: 'p',
        category: 'Meat',
        description: '6 Chicken Wings',
        expiry: '30/11/2020',
        location: 'EN4 4QE',
        collectionTime: '',
      },
      {
        itemId: '4',
        userId: '1',
        photoId: '#1113',
        type: 'c',
        category: 'Vegtables',
        description: '7 Potatoes with roots growing',
        expiry: '28/11/2020',
        location: 'DE3 7TE',
        collectionTime: '28/11/2020 1PM-3PM',
      },
      {
        itemId: '5',
        userId: '1',
        photoId: '#1113',
        type: 'c',
        category: 'Vegetables',
        description: '10 Leaks picked from my garden 5 days ago',
        expiry: '29/12/2020',
        location: 'SL3 7TE',
        collectionTime: '26/12/2020 1PM-3PM',
      },
      {
        itemId: '6',
        userId: '1',
        photoId: '#1113',
        type: 'c',
        category: 'Canned Food',
        description: '2 Tins Of Baxters Carrot And Corriander Soup',
        expiry: '03/12/2020',
        location: 'SP3 7XE',
        collectionTime: '02/12/2020 4PM-8PM',
      },
    ],
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage registerInputs={state['registerInputs']} />
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
          <MyListingsPage userItems={state['userItems']} />
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
