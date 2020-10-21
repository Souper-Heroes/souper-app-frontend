import { connect } from 'react-redux';
import AddEditItem from 'components/Items/AddEditItem';
import { addItem, getItem } from 'actions/item';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  addItem: formData => dispatch(addItem(formData)),
  getItem: _id => dispatch(getItem(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditItem);
