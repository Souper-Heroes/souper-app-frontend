import { connect } from 'react-redux';
import LoginPage from 'components/Login/LoginPage';
import { login, check } from 'actions';

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    check: () => dispatch(check())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
