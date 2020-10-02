/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from 'components/Layout/Header';
import HeaderLinks from 'components/Layout/HeaderLinks';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';
import ItemViewCard from './ItemViewCard';

function ItemViewPage({ item }) {
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
      <ItemViewCard item={item} />
      <SouperFooter />
    </>
  );
}

export default ItemViewPage;
