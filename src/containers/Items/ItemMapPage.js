import { connect } from 'react-redux';
import ItemMapPage from 'components/Items/ItemMapPage';

const mapStateToProps = (state, ownProps) => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid,
  type: ownProps.match.params.type,
  myitems: state.item.myitems,
  searchitems: state.item.search.paginatedResults
});

// const mapDispatchToProps = dispatch => ({
// getMyItems: () => dispatch(getMyItems())
// });

export default connect(mapStateToProps)(ItemMapPage);
