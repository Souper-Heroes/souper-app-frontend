import { connect } from 'react-redux';
import Location from 'components/Location/Location';
import { updateProfile } from 'actions/user';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  updateProfile: payload => dispatch(updateProfile(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
