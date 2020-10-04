import { connect } from 'react-redux';
import LoginPage from 'components/Login/LoginPage';
import { login, check } from 'actions';

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    check: () => dispatch(check())

});

export default connect(null, mapDispatchToProps)(LoginPage);
