import React from 'react';
import Header from 'components/Layout/Header';
import HeaderLinks from 'containers/Layout/HeaderLinks';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';

const Layout = props => {
  return (
    <div>
      <Header
        brand={<Restaurant />}
        color="rose"
        rightLinks={<HeaderLinks />}
        fixed
      />
      <Parallax small filter image={require('assets/img/citrus-fruit.jpg')} />
      {props.children}
      <SouperFooter />
    </div>
  );
};

export default Layout;
