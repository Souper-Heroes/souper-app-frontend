import { connect } from 'react-redux';
import MyItemListing from 'components/Items/MyItemListing';
import {
  deleteItem,
  unreserveItem
} from 'actions/item';

// import {
//  getAddress
// } from 'actions/user';

// 2nd parameter to this function holds our component props
const mapStateToProps = state => ({
  myitems: state.item.myitems,
  _id: state.auth.user.uid,
});

const mapDispatchToProps = dispatch => ({
  unreserveItem: _id => dispatch(unreserveItem(_id)),
  deleteItem: _id => dispatch(deleteItem(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItemListing);
