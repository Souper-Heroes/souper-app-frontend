import { connect } from 'react-redux';
import ItemListings from 'components/Items/ItemListings';
import { getToken } from 'actions/auth';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  getToken: () => dispatch(getToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListings);
