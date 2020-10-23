import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from 'components/Layout/Header';
import HeaderLinks from 'containers/Layout/HeaderLinks';
import { Restaurant, PostAdd } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';
import * as ROUTES from 'components/Routing/routes';
import citrus from 'assets/img/citrus-fruit.jpg';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const history = useHistory();
  const redirectToDashboard = () => {
    history.push(ROUTES.DASHBOARD);
  };
  const redirectToAddItem = () => {
    history.push(ROUTES.ADD_EDIT_ITEM);
  };

  return (
    <div>
      <Header
        brand={<Restaurant onClick={redirectToDashboard} />}
        color="rose"
        rightLinks={<HeaderLinks />}
        fixed
        addItem={<PostAdd onClick={redirectToAddItem} />}
      />
      <Parallax small filter image={citrus} />
      {children}
      <SouperFooter />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
