import { connect } from 'react-redux';
import HeaderLinks from 'components/Layout/HeaderLinks';
import { logout } from 'actions/auth';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(HeaderLinks);
