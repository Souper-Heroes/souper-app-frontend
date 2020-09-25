
import React from 'react';
import Header from 'components/layout/Header.js';
import HeaderLinks from 'components/layout/HeaderLinks.js';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/layout/SouperFooter';

function Page() {
  return (
    <>
      <Header
        brand={<Restaurant />}
        color='rose'
        leftLinks={''}
        rightLinks={<HeaderLinks />}
      />
      <SouperFooter />
    </>
  );
}

export default Page;
