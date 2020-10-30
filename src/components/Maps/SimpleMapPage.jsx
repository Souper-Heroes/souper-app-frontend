import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import PropTypes from 'prop-types';
import styles from 'assets/jss/Items/views/SimpleMapPage';

// core components
import { makeStyles } from '@material-ui/core/styles';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// TODO destructure 'userLoaded' which holds the logged in users default location
export default function SimpleMapPage({
  _id,
  myitems,
  user,
  type,
  searchitems
}) {
  const classes = makeStyles(styles);
  const defaultProps = {
    center: {
      lat: user.location.coordinates[1], // lat: 51.562908,
      lng: user.location.coordinates[0] // lng: 0.21727
    },
    zoom: 11
  };

  const pinstyle = {
    color: '#e91e63', // btn-rose
    width: '25px'
  };

  const LocationPin = ({ text }) => (
    <div className={classes.pin}>
      <Icon icon={locationIcon} className={classes.pinicon} width={pinstyle.width} color={pinstyle.color} />
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
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {type === 'collect' && myitems.filter(myitem => myitem.c_user_uid === _id).map(item => (
          <LocationPin
            key={item._id}
            lat={item.location.coordinates[1]}
            lng={item.location.coordinates[0]}
            text={item.title}
          />
        ))}
        {type === 'search' && searchitems.filter(item => item.c_user_uid === null && item.user_uid !== _id).map(item => (
          <LocationPin
            key={item._id}
            lat={item.location.coordinates[1]}
            lng={item.location.coordinates[0]}
            text={item.title}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

SimpleMapPage.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.string,
  user: PropTypes.instanceOf(Object),
  myitems: PropTypes.instanceOf(Object),
  searchitems: PropTypes.instanceOf(Object)
};

/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */
