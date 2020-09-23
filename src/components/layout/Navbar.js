import React from 'react';
import { Restaurant } from '@material-ui/icons';
import Header from 'components/MaterialKitComponents/Header/Header.js';
import HeaderLinks from 'components/MaterialKitComponents/Header/HeaderLinks.js';

function Navbar() {
  return (
    <Header
      brand={<Restaurant />}
      color='rose'
      leftLinks={''}
      rightLinks={<HeaderLinks />}
    />
  );
}

export default Navbar;
