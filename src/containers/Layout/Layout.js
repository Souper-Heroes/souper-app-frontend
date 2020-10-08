import { connect } from 'react-redux';
import Layout from 'components/Layout/Layout';

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
});

export default connect(mapStateToProps)(Layout);
