import { connect } from 'react-redux';
import HeaderLinks from 'components/Layout/HeaderLinks';
import { logoutUser } from 'actions/auth';

const mapStateToProps = state => ({
  display_name: state.user.display_name
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
