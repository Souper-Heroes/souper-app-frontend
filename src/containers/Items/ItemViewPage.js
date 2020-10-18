import { connect } from 'react-redux';
import ItemViewPage from 'components/Items/ItemViewPage';
//import { useHistory } from 'react-router-dom';

import {
  updateCollectionDates,
  unreserveItem,
  reserveItem,
} from 'actions/item';

const mapStateToProps = (state, ownProps) => {
  console.log("container Item:", ownProps.match.params.type === "provide" 
        ? state.item.pitems ? state.item.pitems.find(i => i._id === ownProps.match.params.id) : null 
        : state.item.citems ? state.item.citems.find(i => i._id === ownProps.match.params.id) : null);

  return {
  isLoggingIn: state.auth.isLoggingIn,
  isAuthenticated: state.auth.isAuthenticated,
  _id: state.auth.user.uid, // TODO Get the actual uuid from firebase of the logged in user
  id: ownProps.match.params.id,
  items: state.item.items,
  pitems: state.item.pitems,
  citems: state.item.citems,
  type: ownProps.match.params.type, 
  item: ownProps.match.params.type === "provide" 
        ? state.item.pitems ? state.item.pitems.find(i => i._id === ownProps.match.params.id) : null 
        : state.item.citems ? state.item.citems.find(i => i._id === ownProps.match.params.id) : null
  //citem: state.item.citems ? state.item.citems.find(i => i._id === ownProps.match.params.id) : null,
  //pitem: state.item.pitems ? state.item.pitems.find(i => i._id === ownProps.match.params.id) : null,
}};

const mapDispatchToProps = dispatch => ({
  updateCollectionDates: (_id, availiability) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    dispatch(updateCollectionDates(_id, availiability)),

  unreserveItem: (_id) => dispatch(unreserveItem(_id)),
  reserveItem: (_id) => dispatch(reserveItem(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewPage);
