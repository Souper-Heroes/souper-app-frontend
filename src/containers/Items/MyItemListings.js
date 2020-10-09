import { connect } from 'react-redux';
import MyItemListings from 'components/Items/MyItemListings';
import { itemlist } from 'actions';
import { deleteItem } from 'actions';
import { sortByItem } from 'actions';

// 2nd parameter to this function holds our component props
const mapStateToProps = (state) => ({
  userItems: state.itemlist.userItems,
  userId: state.itemlist.userId,
});

const mapDispatchToProps = (dispatch) => ({
  itemlist: () => dispatch(itemlist()),
  deleteItem: (itemId) => dispatch(deleteItem(itemId)),
  sortByItem: (menuItem) => dispatch(sortByItem(menuItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItemListings);
