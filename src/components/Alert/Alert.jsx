import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Danger from 'components/MaterialKitComponents/Typography/Danger';
import SnackbarContent from 'components/MaterialKitComponents/Snackbar/SnackbarContent';

const Alert = ({ alerts }) => alerts !== null
  && alerts.length > 0
  && alerts.map(alert => (
    <div key={alert.id}>
      {alert.displayType === 'text' ? (
        alert.alertType === 'danger' && (
          <Danger>{alert.msg}</Danger>
        )
      ) : (
        <SnackbarContent
          message={<span>{alert.msg}</span>}
          close
          color={alert.alertType}
          icon="info_outline"
        />
      )}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.instanceOf(Array)
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
