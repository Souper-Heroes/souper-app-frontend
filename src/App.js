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

    userProfileId: 1,

    userProfile: {
      userId: '1',
      photoId: '#9111',
      userName: 'Doctor Strange',
      userFullName: 'Benedict Cumberbatch',
      address: '63 Kamar Taj',
      postCode: 'EN4 5TQ',
      email: 'dstrange@gmail.com',
      password: 'dfsssD@02sda',
      preferredItemDistance: '2 miles',
      preferredProvideStartTime: '9:30AM',
      preferredProvideEndTime: '2:30AM',
    },

    userProfiles: [
      {
        userId: '1',
        photoId: '#9111',
        userName: 'Doctor Strange',
        userFullName: 'Benedict Cumberbatch',
        address: '63 Kamar Taj',
        postCode: 'EN4 5TQ',
        email: 'dstrange@gmailx.com',
        password: 'dfsssD@02sda',
        preferredItemDistance: '2 miles',
        preferredProvideStartTime: '9:30AM',
        preferredProvideEndTime: '2:30AM',
      },
      {
        userId: '2',
        photoId: '#9111',
        userName: 'Thor',
        userFullName: 'Chris Hemsworth',
        address: '72 Nordic Drive',
        postCode: 'SL7 6PQ',
        email: 'thor@gmailx.com',
        password: 'dfxxsD@02sda',
        preferredItemDistance: '5 miles',
        preferredProvideStartTime: '1:00AM',
        preferredProvideEndTime: '6:30PM',
      },
    ],

    userItems: [
      {
        itemId: '1',
        photoId: '#1111',
        provideUserId: '1',
        collectUserId: '2',
        category: 'Fruit',
        description: '5 Squashy Bananas',
        expiryDate: '23/10/2020',
        location: 'EN4 4QE',
        preferredProvideTime: '23/10/2020 4PM-6PM',
        preferredCollectTime: '23/10/2020 4PM-6PM',
        reservedItem: 'false',
      },
      {
        itemId: '2',
        photoId: '#1112',
        provideUserId: '1',
        collectUserId: '3',
        category: 'Nuts',
        description: 'Bag of Cashew Nuts',
        expiryDate: '24/10/2020',
        location: 'SR5 4TQ',
        preferredProvideTime: '24/10/2020 10:30AM-5:50PM',
        preferredCollectTime: '',
        reservedItem: 'false',
      },
      {
        itemId: '3',
        photoId: '#1113',
        provideUserId: '1',
        collectUserId: '4',
        category: 'Meat',
        description: '6 Chicken Wings',
        expiryDate: '30/11/2020',
        location: 'EN4 4QE',
        preferredProvideTime: '24/11/2020 1PM-3PM',
        preferredCollectTime: '',
        reservedItem: 'false',
      },
      {
        itemId: '4',
        photoId: '#1113',
        provideUserId: '4',
        collectUserId: '1',
        category: 'Vegtables',
        description: '7 Potatoes with roots growing',
        expiryDate: '28/11/2020',
        location: 'DE3 7TE',
        preferredProvideTime: '28/11/2020 1PM-3PM',
        preferredCollectTime: '',
        reservedItem: 'false',
      },
      {
        itemId: '5',
        photoId: '#1113',
        provideUserId: '5',
        collectUserId: '1',
        category: 'Vegetables',
        description: '10 Leaks picked from my garden 5 days ago',
        expiryDate: '29/12/2020',
        location: 'SL3 7TE',
        preferredProvideTime: '26/12/2020 1PM-3PM',
        preferredCollectTime: '',
        reservedItem: 'false',
      },
      {
        itemId: '6',
        photoId: '#1113',
        provideUserId: '6',
        collectUserId: '1',
        category: 'Canned Food',
        description: '2 Tins Of Baxters Carrot And Corriander Soup',
        expiryDate: '03/12/2020',
        location: 'SP3 7XE',
        preferredProvideTime: '02/12/2020 4PM-8PM',
        preferredCollectTime: '',
        reservedItem: 'false',
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
          <MyListingsPage
            userProfile={state['userProfile']}
            userItems={state['userItems']}
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
