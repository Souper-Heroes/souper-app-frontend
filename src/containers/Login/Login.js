import { connect } from 'react-redux';
import LoginPage from 'components/Login/LoginPage';
import { loginUser, loginWithGoogle } from 'actions/auth';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginUser(email, password)),
  loginWithGoogle: () => dispatch(loginWithGoogle()),
});

LoginPage.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
