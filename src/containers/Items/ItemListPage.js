import { connect } from 'react-redux';
import ItemListPage from 'components/Items/ItemListPage';
// import { getToken } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  items: state.item,
  userId: state.itemlist.userId,
});

const mapDispatchToProps = dispatch => ({
  //   getToken: () => dispatch(getToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListPage);
