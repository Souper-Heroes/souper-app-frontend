import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from 'components/Layout/Header';
import HeaderLinks from 'containers/Layout/HeaderLinks';
import { Restaurant, PostAdd } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';
import * as ROUTES from 'components/Routing/routes';
import citrus from 'assets/img/citrus-fruit.jpg';
import PropTypes from 'prop-types';
import Alert from 'components/Alert/Alert';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const Layout = ({ children }) => {
  const history = useHistory();
  const redirectToDashboard = () => {
    history.push(ROUTES.DASHBOARD);
  };
  const redirectToAddItem = () => {
    history.push(ROUTES.ADD_ITEM);
  };

  return (
    <div>
      <Alert />
      <Header
        brand={<LightTooltip title="Dashboard"><Restaurant onClick={redirectToDashboard} /></LightTooltip>}
        color="rose"
        rightLinks={<HeaderLinks />}
        fixed
        addItem={<LightTooltip title="Add item"><PostAdd onClick={redirectToAddItem} /></LightTooltip>}
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
