import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import TestData from 'assets/data/TestData.json';
import ItemViewPage from 'components/Items/ItemViewPage';
import LoginPage from 'containers/Login/Login';
import RegisterPage from 'containers/Login/Register';
import ItemListPage from 'components/Items/ItemListPage';
import ItemListings from 'containers/Items/ItemListings';
import Profile from 'containers/Profile/Profile';
import Forgotten from 'components/Login/Forgotten';
import ResetPassword from 'components/Login/ResetPassword';
import AddEditItem from 'components/Items/AddEditItem';
import ProtectedRoute from 'components/Routing/ProtectedRoute';
import * as ROUTES from 'components/Routing/routes';

function App(props) {
  const [data] = useState(TestData);
  const { isAuthenticated, isVerifying } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={ROUTES.LOGIN} />
        </Route>
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route
          exact
          path={ROUTES.REGISTER}
          render={() => (
            <RegisterPage registerInputs={data['registerInputs']} />
          )}
        />
        <Route exact path={ROUTES.FORGOTTEN_PASSWORD} component={Forgotten} />
        <Route exact path={ROUTES.REST_PASSWORD} component={ResetPassword} />
        <Route
          path={ROUTES.ITEM_VIEW}
          render={() => <ItemViewPage item={data['userItems'][0]} />}
        />
        <Route
          path={ROUTES.ITEM_LIST}
          render={() => (
            <ItemListPage
              userProfile={data['userProfile']}
              userItems={data['userItems']}
            />
          )}
        />
        <ProtectedRoute
          path={ROUTES.PROFILE}
          component={Profile}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path={ROUTES.DASHBOARD}
          component={ItemListings}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          path={ROUTES.ADD_EDIT_ITEM}
          component={AddEditItem}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
