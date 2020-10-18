import { connect } from 'react-redux';
import ItemListPage from 'components/Items/ItemListPage';
import { getMyItems } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid,
  pitems: state.item.pitems,
  citems: state.item.citems,
  myitems: state.item.myitems,
  loading: state.item.loading
});

const mapDispatchToProps = dispatch => ({
  getMyItems: () => dispatch(getMyItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListPage);
