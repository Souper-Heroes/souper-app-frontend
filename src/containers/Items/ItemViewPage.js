import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';
//import { useHistory } from 'react-router-dom';

import {
  updateCollectionDates,
  unreserveItem,
  reserveItem,
} from 'actions/item';

const mapStateToProps = (state, ownProps) => {
  return {
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid, // Get the actual uuid from firebase of the logged in user
  id: ownProps.match.params.id,
  myitems: state.item.myitems,
  type: ownProps.match.params.type, 
  item: state.item.myitems ? state.item.myitems.find(i => i._id === ownProps.match.params.id) : null 
}};

const mapDispatchToProps = dispatch => ({
  updateCollectionDates: (_id, availiability) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    dispatch(updateCollectionDates(_id, availiability)),

  unreserveItem: (_id) => dispatch(unreserveItem(_id)),
  reserveItem: (_id) => dispatch(reserveItem(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
