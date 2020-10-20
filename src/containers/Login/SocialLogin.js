import { connect } from 'react-redux';
import SocialLogin from 'components/Login/SocialLogin';
import { loginWithGoogle, loginWithFacebook } from 'actions/auth';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  signUpError: state.auth.signUpError,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook())
});

SocialLogin.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  signUpError: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);
