import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import Icon from '@material-ui/core/Icon';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import Slider from 'nouislider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { getAddressProfile } from 'actions/user';
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

function Profile({
  initialName, initialPic, initialPostCode, initialLocation, initialUnit, initialDistance, initialAddress, updateProfile, email
}) {
  const [display_name, setDisplayName] = useState(initialName);
  const [postcode, setPostCode] = useState(initialPostCode);
  const [address, setAddress] = useState(initialAddress);
  const [preferred_distance, setDistance] = useState(initialDistance);
  const [preferred_distance_unit, setUnit] = useState(initialUnit);
  const [profile_pic, setProfilePic] = useState(initialPic);
  let location = initialLocation;

  const imageInputRef = useRef();

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const onChangeHandler = event => {
    const { name: nameInput, value } = event.currentTarget;
    if (nameInput === 'preferred_distance_unit') {
      setUnit(value);
      document.getElementById('sliderRegular').noUiSlider.updateOptions({
        start: `${preferred_distance}`,
        format: {
          from: Number,
          to: val => `${val.toFixed(2)} ${value === 'Miles' ? 'mi' : 'km'}`
        }
      });
    } else if (nameInput === 'display_name') {
      setDisplayName(value);
    } else if (nameInput === 'postcode') {
      setPostCode(value);
      setAddress('');
      location = {};
    }
  };

  const openFileDialog = () => {
    imageInputRef.current.click();
  };

  const encodeImageFile = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
    }
  };

  const searchAddress = async () => {
    const addressUpdated = await getAddressProfile(postcode);
    setAddress(addressUpdated.address);
    location = addressUpdated.location;
  };

  const onSubmit = () => {
    updateProfile({
      display_name,
      address,
      postcode,
      preferred_distance,
      preferred_distance_unit,
      profile_pic,
      location
    });
  };

  useEffect(() => {
    const distanceSlider = document.getElementById('sliderRegular');
    // create distance Slider when component mounts
    Slider.create(distanceSlider, {
      start: `${preferred_distance}`,
      format: {
        from: Number,
        to: value => `${value.toFixed(2)} ${preferred_distance_unit === 'Miles' ? 'mi' : 'km'}`
      },
      keyboardSupport: true,
      connect: [true, false],
      range: {
        min: 0,
        max: 5
      },
      tooltips: true,
      pips: {
        mode: 'steps',
        stepped: true,
        density: 10
      }
    });
    // set the Distance State when slider value changed
    distanceSlider.noUiSlider.on('change', () => setDistance(distanceSlider.noUiSlider.get().replace(/[^\d.-]/g, '')));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} md={8}>
            <div style={{ alignContent: 'flex' }}>
              <h2 className={classes.title}>  Profile  </h2>
            </div>
            <form>
              <GridContainer>
                <GridItem xs={12} md={6} align="center">
                  <img
                    src={profile_pic}
                    alt="profile"
                    className={imageClasses}
                    style={{ width: 180, height: 180 }}
                  />
                  <br /><br />
                  <Button color="rose" size="md" onClick={openFileDialog}>
                    CHANGE AVATAR
                  </Button>
                  <input type="" ref={imageInputRef} accept=".png, .jpg, .jpeg" style={{ display: 'none' }} onChange={e => encodeImageFile(e)} />
                  <br />
                  <Button color="info" size="md">
                    DISABLED
                  </Button>
                </GridItem>
                <GridItem xs={12} md={6} align="right">
                  <CustomInput
                    labelText="Name"
                    id="fullName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: display_name,
                      name: 'display_name',
                      onChange: event => onChangeHandler(event)
                    }}
                  />
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: email,
                      disabled: true
                    }}
                  />
                  <CustomInput
                    labelText="Post Code"
                    id="postcode"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: postcode,
                      name: 'postcode',
                      onChange: event => onChangeHandler(event)
                    }}
                  />
                  <CustomInput
                    labelText="First line of address"
                    id="address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: address,
                      disabled: true
                    }}
                  />
                  <Button
                    variant="contained"
                    color="rose"
                    className={classes.button}
                    endIcon={<Icon>search</Icon>}
                    onClick={event => searchAddress(event)}
                  >
                    Search address
                  </Button>
                  <InputLabel id="demo-simple-select-label" style={{ marginTop: 15 }}>
                    Maximum distance you would travel for an item
                  </InputLabel>
                  <FormControl required className={classes.formControl} style={{ marginBottom: 20 }}>
                    <Select
                      native
                      value={preferred_distance_unit}
                      onChange={event => onChangeHandler(event)}
                      name="preferred_distance_unit"
                    >
                      <option value="Miles">In Miles</option>
                      <option value="Kilometers">In Kilometers</option>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <div
                      className="slider-primary"
                      id="sliderRegular"
                      name="slider"
                      onChange={event => onChangeHandler(event)}
                    />
                  </FormControl>
                  <Button variant="contained" style={{ marginTop: 40 }} color="success" size="md" onClick={onSubmit}>
                    SAVE
                  </Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

Profile.propTypes = {
  updateProfile: PropTypes.func,
  initialName: PropTypes.string,
  initialPostCode: PropTypes.string,
  initialAddress: PropTypes.string,
  initialDistance: PropTypes.string,
  initialUnit: PropTypes.number,
  initialPic: PropTypes.string,
  initialLocation: PropTypes.string,
  email: PropTypes.string
};

export default Profile;
