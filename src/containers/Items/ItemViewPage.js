import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';

import {
  updateCollectionDates,
  unreserveItem,
  reserveItem,
} from 'actions/item';

const getItem = (state, ownProps) => {
  if (ownProps.match.params.type === 'search') {
    return state.item.search ? state.item.search.find(i => i._id === ownProps.match.params.id) : null;
  }
  return state.item.myitems ? state.item.myitems.find(i => i._id === ownProps.match.params.id) : null;
};

const mapStateToProps = (state, ownProps) => (
  {
    isLoggingIn: state.auth.isLoggingIn,
    isAuthenticated: state.auth.isAuthenticated,
    _id: state.auth.user.uid, // Get the actual uuid from firebase of the logged in user
    id: ownProps.match.params.id,
    myitems: state.item.myitems,
    type: ownProps.match.params.type,
    item: getItem(state, ownProps)
  }
);

const mapDispatchToProps = dispatch => ({
  updateCollectionDates: (_id, availiability) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    dispatch(updateCollectionDates(_id, availiability)),

  unreserveItem: (_id, history) => dispatch(unreserveItem(_id, history)),
  reserveItem: (_id, history) => dispatch(reserveItem(_id, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
