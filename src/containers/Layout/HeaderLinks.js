import { connect } from 'react-redux';
import HeaderLinks from 'components/Layout/HeaderLinks';
import { logoutUser } from 'actions/auth';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(HeaderLinks);
