import { connect } from 'react-redux';
import HeaderLinks from 'components/Layout/HeaderLinks';
import { logoutUser } from 'actions/auth';

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
