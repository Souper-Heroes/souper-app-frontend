import React from 'react';
import Header from 'components/Layout/Header';
import HeaderLinks from 'components/Layout/HeaderLinks';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';

function Page() {
  return (
    <>
      <Header
        brand={<Restaurant />}
        color="rose"
        leftLinks=""
        rightLinks={<HeaderLinks />}
      />
      <SouperFooter />
    </>
  );
}

export default Page;