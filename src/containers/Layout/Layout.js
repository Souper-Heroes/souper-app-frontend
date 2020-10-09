import { connect } from 'react-redux';
import Layout from 'components/Layout/Layout';

const mapStateToProps = state => ({
  isLogged: !state.firebase.auth.isEmpty
});

export default connect(mapStateToProps)(Layout);
