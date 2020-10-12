import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';
// import { getToken } from 'actions/item';

const mapStateToProps = (state, ownProps) => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  id: ownProps.match.params.id,
  items: state.item,
  item: state.item ? state.item.items[ownProps.match.params.id] : null
});

const mapDispatchToProps = dispatch => ({
  //   getToken: () => dispatch(getToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
