import { connect } from 'react-redux';
import ItemListPage from 'components/Items/ItemListPage';
//import { getProviderItems } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  items: state.item.items,
  _id: state.auth.user.uid,
});

const mapDispatchToProps = dispatch => ({
  //getProviderItems: _id => dispatch(getProviderItems(_id)),
  //getCollectorItems: _id => dispatch(getCollectorItems(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListPage);
