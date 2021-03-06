import { connect } from 'react-redux';
import RegisterPage from 'components/Login/RegisterPage';
import { signUp } from 'actions/auth';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  signUpError: state.auth.signUpError,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  signUp: (email, password, displayName) => dispatch(signUp(email, password, displayName))
});

RegisterPage.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  signUpError: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
