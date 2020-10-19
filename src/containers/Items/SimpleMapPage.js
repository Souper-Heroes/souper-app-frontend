import { connect } from 'react-redux';
import SimpleMapPage from 'components/Items/SimpleMapPage';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid,
  userLoaded: state.auth.userLoaded,
  myitems: state.item.myitems,
});

// const mapDispatchToProps = dispatch => ({
// getMyItems: () => dispatch(getMyItems())
// });

export default connect(mapStateToProps)(SimpleMapPage);
