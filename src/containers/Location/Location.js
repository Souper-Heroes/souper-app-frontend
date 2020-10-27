import { connect } from 'react-redux';
import Location from 'components/Location/Location';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  //   login: (email, password) => dispatch(loginUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
