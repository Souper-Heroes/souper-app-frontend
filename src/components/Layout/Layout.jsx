import React from 'react';
import Header from 'components/Layout/Header';
import HeaderLinks from 'containers/Layout/HeaderLinks';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';
import citrus from 'assets/img/citrus-fruit.jpg';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <Header
      brand={<Restaurant />}
      color="rose"
      rightLinks={<HeaderLinks />}
      fixed
    />
    <Parallax small filter image={citrus} />
    {children}
    <SouperFooter />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
