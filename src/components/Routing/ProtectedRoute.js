import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from 'containers/Layout/Layout';
import * as ROUTES from './routes';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: `${ROUTES.LOGIN}`,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
