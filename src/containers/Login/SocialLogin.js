import { connect } from 'react-redux';
import SocialLogin from 'components/Login/SocialLogin';
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithTwitter
} from 'actions/auth';

const mapDispatchToProps = dispatch => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  loginWithTwitter: () => dispatch(loginWithTwitter())
});

export default connect(null, mapDispatchToProps)(SocialLogin);
