import { connect } from 'react-redux';
import SimpleMapPage from 'components/Maps/SimpleMapPage';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid,
  user: state.user,
  myitems: state.item.myitems,
});

// const mapDispatchToProps = dispatch => ({
// getMyItems: () => dispatch(getMyItems())
// });

export default connect(mapStateToProps)(SimpleMapPage);
