import { connect } from 'react-redux';
import Profile from 'components/Profile/Profile';
import { updateProfile } from 'actions/user';

const mapStateToProps = ({
  auth: {
    user: {
      email
    }
  },
  user:
  {
    display_name: initialName,
    profile_pic: initialPic,
    postcode: initialPostCode,
    location: initialLocation,
    preferred_distance_unit: initialUnit,
    preferred_distance: initialDistance,
    address: initialAddress
  }
}) => ({
  initialName,
  initialPic,
  initialPostCode,
  initialLocation,
  initialUnit,
  initialDistance,
  initialAddress,
  email
});

const mapDispatchToProps = dispatch => ({
  updateProfile: payload => dispatch(updateProfile(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
