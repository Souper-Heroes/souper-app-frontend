import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import PropTypes from 'prop-types';
import * as ROUTES from './routes';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => {
  const getComponent = props => {
    let component;
    if (isVerifying) {
      component = <div />;
    } else if (isAuthenticated) {
      component = (<Layout><Component {...props} /></Layout>);
    } else {
      component = (<Redirect to={{ pathname: `${ROUTES.LOGIN}`, state: { from: props.location } }} />);
    }
    return component;
  };

  return (
    <Route
      {...rest}
      render={props => getComponent(props)}
    />
  );
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  isVerifying: PropTypes.bool,
  component: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object)
};

export default ProtectedRoute;
