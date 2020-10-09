import { connect } from 'react-redux';
import Layout from 'components/Layout/Layout';

const mapStateToProps = state => ({
  isLogged: null
});

export default connect(mapStateToProps)(Layout);
