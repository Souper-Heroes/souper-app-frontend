import { connect } from 'react-redux';
import LoginPage from 'components/Login/LoginPage';
import { loginUser } from 'actions/auth';
// import { login, check } from 'actions';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
