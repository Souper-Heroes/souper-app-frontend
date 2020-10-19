import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import PropTypes from 'prop-types';
import styles from 'assets/jss/Items/views/SimpleMapPage';

// core components
import { makeStyles } from '@material-ui/core/styles';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMapPage({ _id, userLoaded, myitems }) {
  const classes = makeStyles(styles);

  const defaultProps = {
    center: {
      lat: 51.562908, // TODO userLoaded.location.coordinates[0], // lat: 51.562908,
      lng: 0.21727 // TODO userLoaded.location.coordinates[1] // lng: 0.21727
    },
    zoom: 11
  };

  const LocationPin = ({ text }) => (
    <div className={classes.pin}>
      <Icon icon={locationIcon} className={classes.pinicon} />
      <p className={classes.pintext}>{text}</p>
    </div>
  );

  LocationPin.propTypes = {
    text: PropTypes.string,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyC16r5DUFFi0KWhu4ukB4w4ygDE2HmYZd8'
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {myitems.filter(myitem => myitem.c_user_uid === _id).map(item => (
          <LocationPin
            key={item._id}
            lat={item.location.coordinates[0]}
            lng={item.location.coordinates[1]}
            text={item.title}
          />
        ))}

      </GoogleMapReact>
    </div>
  );
}

SimpleMapPage.propTypes = {
  _id: PropTypes.string,
  userLoaded: PropTypes.instanceOf(Object),
  myitems: PropTypes.instanceOf(Object)
};

/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */
