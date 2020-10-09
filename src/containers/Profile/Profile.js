import { connect } from 'react-redux';
import Profile from 'components/Profile/Profile';
import { updateMessage } from 'actions';

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: (text) => dispatch(updateMessage(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
