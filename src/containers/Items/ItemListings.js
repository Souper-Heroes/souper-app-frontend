import { connect } from 'react-redux';
import ItemListings from 'components/Items/ItemListings';
import { getItems, searchItems } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
  items: state.item.items,
  search: state.item.search,
  filters: state.user.filters,
  loading: state.item.loading,
  categoryOptions: state.item.categoryOptions
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems()),
  searchItems: filterOptions => dispatch(searchItems(filterOptions))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListings);
