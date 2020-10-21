import { connect } from 'react-redux';
import ItemListings from 'components/Items/ItemListings';
import { getItems, searchItems } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
  items: state.item.items,
  search: state.item.search,
  searchCount: state.item.search.length,
  filters: state.item.filters,
  loading: state.item.loading
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems()),
  searchItems: () => dispatch(searchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListings);
