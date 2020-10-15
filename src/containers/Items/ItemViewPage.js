import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';
import {
  updateCollectionDates,
  unreserveItem,
  reserveItem,
} from 'actions/item';

const mapStateToProps = (state, ownProps) => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: '1', // TODO Get the actual uuid from firebase of the logged in user
  id: ownProps.match.params.id,
  items: state.item.items,
  item: state.item.items
    ? state.item.items.find(i => i._id === ownProps.match.params.id)
    : null,
});

const mapDispatchToProps = dispatch => ({
  updateCollectionDates: (_id, availiability) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    dispatch(updateCollectionDates(_id, availiability)),
  unreserveItem: (_id, itemId) => dispatch(unreserveItem(_id, itemId)),
  reserveItem: (_id, itemId) => dispatch(reserveItem(_id, itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
