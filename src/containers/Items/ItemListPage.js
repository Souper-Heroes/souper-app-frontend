import { connect } from 'react-redux';
import ItemListPage from 'components/Items/ItemListPage';
import { itemlist } from 'actions';

// 2nd parameter to this function holds our component props
const mapStateToProps = (state) => ({
  userItems: state.itemlist.userItems,
  userId: state.itemlist.userId,
});

const mapDispatchToProps = (dispatch) => ({
  itemlist: () => dispatch(itemlist()),
});

//export default connect(mapStateToProps, mapDispatchToProps)(TabListings);
export default connect(mapStateToProps, mapDispatchToProps)(ItemListPage);
