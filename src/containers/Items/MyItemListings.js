import { connect } from 'react-redux';
import MyItemListings from 'components/Items/MyItemListings';
import { deleteItem, sortByItem } from 'actions/item';

// 2nd parameter to this function holds our component props
const mapStateToProps = state => ({
  items: state.item.items,
  uuid: 1, // ?ODO Get the actual uuid from firebase of the logged in user
});

const mapDispatchToProps = dispatch => ({
  deleteItem: itemId => dispatch(deleteItem(itemId)),
  sortByItem: menuItem => dispatch(sortByItem(menuItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItemListings);
