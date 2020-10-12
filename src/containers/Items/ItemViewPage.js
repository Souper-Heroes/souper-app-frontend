import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';
import { itemlist } from 'actions';

// 2nd parameter to this function holds our component props
const mapStateToProps = (state, ownProps) => ({
  item: state.itemlist.userItems[3],

  //item: state.itemlist.userItems.find(
  //  (item) => item.itemId === ownProps.itemId
  //),
  // userId: state.itemlist.userId,
  userId: 3,
});

const mapDispatchToProps = (dispatch) => ({
  itemlist: () => dispatch(itemlist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
