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
  // item: state.item ? state.item.items[ownProps.match.params.id] : null,

  // TODO **** Note can't match using datatype matching (i.e ===) but can match on value (==)
  item: state.item.items
    ? state.item.items.find(
        itemToFind => itemToFind._id === ownProps.match.params.id
      )
    : null,
});

const mapDispatchToProps = dispatch => ({
  //   getToken: () => dispatch(getToken())
  updateCollectionDates: (_id, availiability) =>
    dispatch(updateCollectionDates(_id, availiability)),
  unreserveItem: (_id, itemId) => dispatch(unreserveItem(_id, itemId)),
  reserveItem: (_id, itemId) => dispatch(reserveItem(_id, itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
