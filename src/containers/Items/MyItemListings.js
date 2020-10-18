import { connect } from 'react-redux';
import MyItemListings from 'components/Items/MyItemListings';
import {
  deleteItem,
  sortByItem,
  unreserveItem,
} from 'actions/item';

// 2nd parameter to this function holds our component props
const mapStateToProps = (state) => ({
  myitems: state.item.myitems,
  _id: state.auth.user.uid,
});

const mapDispatchToProps = dispatch => ({
  unreserveItem: (_id) => dispatch(unreserveItem(_id)),
  deleteItem: _id => dispatch(deleteItem(_id)),
  sortByItem: menuItem => dispatch(sortByItem(menuItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItemListings);
