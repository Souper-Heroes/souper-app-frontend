import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';
import { updateCollectionDates } from 'actions/item';

const mapStateToProps = (state, ownProps) => ({
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  uuid: 1, // TODO Get the actual uuid from firebase of the logged in user
  id: ownProps.match.params.id,
  items: state.item.items,
  // item: state.item ? state.item.items[ownProps.match.params.id] : null,

  // TODO **** Note can't match using datatype matching (i.e ===) but can match on value (==)
  item: state.item.items
    ? state.item.items.find(itemToFind => itemToFind.itemId === ownProps.match.params.id)
    : null,
});

const mapDispatchToProps = dispatch => ({
  //   getToken: () => dispatch(getToken())
  updateCollectionDates: (
    itemId,
    collectionStartDateTime,
    collectionEndDateTime
  ) => dispatch(
    updateCollectionDates(
      itemId,
      collectionStartDateTime,
      collectionEndDateTime
    )
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
