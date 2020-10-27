import React, { useState, useRef } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import PropTypes from 'prop-types';
import styles from 'assets/jss/location/locationSplash';
import Icon from '@material-ui/core/Icon';
import { getAddressProfile } from 'actions/user';

const useStyles = makeStyles(styles);

export default function Location({ user, updateProfile }) {
  const classes = useStyles();

  const [postcode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');

  const postCodeRef = useRef();

  const onChangeHandler = event => {
    const { name: nameInput, value } = event.currentTarget;
    if (nameInput === 'postcode') {
      setPostCode(value);
      setAddress('');
    }
  };

  const searchAddress = async () => {
    if (postCodeRef.current.reportValidity()) {
      const addressUpdated = await getAddressProfile(postcode);
      setAddress(addressUpdated.address);
      setLocation(addressUpdated.location);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    updateProfile({
      address,
      postcode,
      location
    });
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h3 className={classes.title}>Welcome, {user.display_name}</h3>
          <h4 className={classes.description}>
            Please enter a postcode and search for your location. This will
            allow you to search for food locally.
          </h4>
          <form onSubmit={onSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Post Code"
                  id="postcode"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: postcode,
                    name: 'postcode',
                    required: true,
                    onChange: event => onChangeHandler(event)
                  }}
                >
                  <input
                    value={postcode}
                    name="postcode"
                    required
                    ref={postCodeRef}
                    style={{ zIndex: -1, opacity: 0, position: 'absolute' }}
                    onChange={() => ({})}
                    title="Please enter a valid UK postcode"
                    pattern="^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$"
                  />
                </CustomInput>
              </GridItem>
              <CustomInput
                labelText="Address"
                id="Address"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                  disabled: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 1,
                  value: address
                }}
              />
              <GridItem xs={12} sm={6} md={4} container spacing={1}>
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                    fullWidth
                    color="rose"
                    endIcon={<Icon>search</Icon>}
                    onClick={event => searchAddress(event)}
                  >Search Address
                  </Button>
                </GridItem>
              </GridItem>
              {address.length > 0 && (
              <GridItem xs={12} sm={6} md={8} container spacing={1}>
                <GridItem xs={12} sm={12} md={12} container justify="flex-end">
                  <Button type="submit" color="success">
                    Continue
                  </Button>
                </GridItem>
              </GridItem>
              )}
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Location.propTypes = {
  updateProfile: PropTypes.func,
  user: PropTypes.instanceOf(Object)
};
