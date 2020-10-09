import { connect } from 'react-redux';
import Layout from 'components/Layout/Layout';

const mapStateToProps = state => ({
  isLoggingIn: state.auth.isLoggingIn,
  loginError: state.auth.loginError,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Layout);
