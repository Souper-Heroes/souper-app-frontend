import { connect } from 'react-redux';
import MyItemListing from 'components/Items/MyItemListing';
import {
  //deleteItem,
  //sortByItem,
  unreserveItem,
} from 'actions/item';

// 2nd parameter to this function holds our component props
const mapStateToProps = state => ({
  // items: state.item.items,
  pitems: state.item.pitems,
  citems: state.item.citems,
  _id: state.auth.user.uid,
  //type: state.item.type
});

const mapDispatchToProps = dispatch => ({
  unreserveItem: (_id) => dispatch(unreserveItem(_id)),
  //deleteItem: _id => dispatch(deleteItem(_id)),
  //sortByItem: menuItem => dispatch(sortByItem(menuItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItemListing);
