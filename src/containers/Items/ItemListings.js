import { connect } from 'react-redux';
import ItemListings from 'components/Items/ItemListings';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ItemListings);
