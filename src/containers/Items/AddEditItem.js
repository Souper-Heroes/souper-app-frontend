import { connect } from 'react-redux';
import AddEditItem from 'components/Items/AddEditItem';
import { addItem, updateItem } from 'actions/item';

const mapStateToProps = (state, ownProps) => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
  id: ownProps.match.params.id,
  myitems: state.item.myitems,
  item: state.item.myitems
    ? state.item.myitems.find(i => i._id === ownProps.match.params.id)
    : null,
});

const mapDispatchToProps = dispatch => ({
  addItem: formData => dispatch(addItem(formData)),
  updateItem: (formData, history) => dispatch(updateItem(formData, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditItem);
