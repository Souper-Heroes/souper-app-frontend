/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from 'components/Layout/Header.js';
import HeaderLinks from 'components/Layout/HeaderLinks.js';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import ItemViewCard from './ItemViewCard';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax.js';

function ItemViewPage() {
  return (
    <>
      <Header
        brand={<Restaurant />}
        color='rose'
        leftLinks={''}
        rightLinks={<HeaderLinks />}
        fixed
      />
      <Parallax small filter image={require('assets/img/citrus-fruit.jpg')} />
      <ItemViewCard />
      <SouperFooter />
    </>
  );
}

export default ItemViewPage;
