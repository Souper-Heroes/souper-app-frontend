import { connect } from 'react-redux';
import ItemMapPage from 'components/Items/ItemMapPage';
// import { getMyItems } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid,
  myitems: state.item.myitems,
  // loading: state.item.loading
});

// const mapDispatchToProps = dispatch => ({
// getMyItems: () => dispatch(getMyItems())
// });

export default connect(mapStateToProps)(ItemMapPage);
