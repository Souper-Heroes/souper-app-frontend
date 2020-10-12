import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import TestData from 'assets/data/TestData.json';
import ItemViewPage from 'containers/Items/ItemViewPage';
import LoginPage from 'containers/Login/Login';
import RegisterPage from 'containers/Login/Register';
import ItemListPage from 'containers/Items/ItemListPage';
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
          render={() => <RegisterPage registerInputs={data.registerInputs} />}
        />
        <Route exact path={ROUTES.FORGOTTEN_PASSWORD} component={Forgotten} />
        <Route exact path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
        <ProtectedRoute
          path={ROUTES.ITEM_VIEW}
          component={ItemViewPage}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          path={ROUTES.ITEM_LIST}
          component={ItemListPage}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
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
