import { connect } from 'react-redux';
import Forgotten from 'components/Login/Forgotten';
import { passwordReset } from 'actions/auth';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  passwordReset: email => dispatch(passwordReset(email))
});

Forgotten.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgotten);
