import { connect } from 'react-redux';
import Profile from 'components/Profile/Profile';
import { updateProfile } from 'actions/user';

const mapDispatchToProps = dispatch => ({
  updateProfile: payload => dispatch(updateProfile(payload))
});

export default connect(null, mapDispatchToProps)(Profile);

