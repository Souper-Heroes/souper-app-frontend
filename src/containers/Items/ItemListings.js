import { connect } from 'react-redux';
import ItemListings from 'components/Items/ItemListings';
import { getItems } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListings);
