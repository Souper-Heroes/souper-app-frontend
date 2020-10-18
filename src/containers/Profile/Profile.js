import { connect } from 'react-redux';
import Profile from 'components/Profile/Profile';

const mapStateToProps = ({ user: { name, email, postCode } }) => ({
  initialName: name,
  email,
  initialPostCode: postCode
});

export default connect(mapStateToProps)(Profile);
