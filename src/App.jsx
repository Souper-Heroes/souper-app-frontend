import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import ProtectedRoute from 'components/Auth/ProtectedRoute';

function App(props) {
  const [data] = useState(TestData);
  const { isAuthenticated, isVerifying } = props;

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route
        path="/register"
        render={() => <RegisterPage registerInputs={data['registerInputs']} />}
      />

      <Route path="/forgotten" component={Forgotten} />
      <Route path="/reset" component={ResetPassword} />
      <Route
        path="/itemview"
        render={() => <ItemViewPage item={data['userItems'][0]} />}
      />
      <Route
        path="/itemlist"
        render={() => (
          <ItemListPage
            userProfile={data['userProfile']}
            userItems={data['userItems']}
          />
        )}
      />
      <ProtectedRoute
        path="/profile"
        component={Profile}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/dashboard"
        component={ItemListings}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        path="/addEditItem"
        component={AddEditItem}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
