import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Danger from 'components/MaterialKitComponents/Typography/Danger';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alerts(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = ({ alerts }) => alerts !== null
  && alerts.length > 0
  && alerts.map(alert => (
    <div key={alert.id}>
      {alert.displayType === 'text' ? (
        alert.alertType === 'danger' && <Danger>{alert.msg}</Danger>
      ) : (
        <Snackbar open>
          <Alerts severity={alert.alertType}>
            {alert.msg}
          </Alerts>
        </Snackbar>
      )}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
