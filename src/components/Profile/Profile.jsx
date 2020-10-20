import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import profileImage from 'assets/img/faces/christian.jpg';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import Slider from 'nouislider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Delete from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

function Profile({ initialName, email, initialPostCode }) {
  const [name, setName] = React.useState(initialName);
  const [postCode, setPostCode] = React.useState(initialPostCode);
  const [distance, setDistance] = useState(2);
  const [unit, setUnit] = useState('Miles');

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const onChangeHandler = event => {
    const { name: nameInput, value } = event.currentTarget;
    if (nameInput === 'unit') {
      setUnit(value);
      document.getElementById('sliderRegular').noUiSlider.updateOptions({
        start: `${distance}`,
        format: {
          from: Number,
          to: val => `${val.toFixed(2)} ${value === 'Miles' ? 'mi' : 'km'}`
        }
      });
    } else if (nameInput === 'name') {
      setName(value);
    } else if (nameInput === 'postCode') {
      setPostCode(value);
    }
  };

  const onSubmit = () => {
    // console.log({ name, email, postCode, distance, unit });
  };

  useEffect(() => {
    const distanceSlider = document.getElementById('sliderRegular');
    // create distance Slider when component mounts
    Slider.create(distanceSlider, {
      start: `${distance}`,
      format: {
        from: Number,
        to: value => `${value.toFixed(2)} ${unit === 'Miles' ? 'mi' : 'km'}`
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
            <div style={{ display: 'flex' }}>
              <h2 className={classes.title}>  Profile  </h2>
              <Button justIcon round color="rose" style={{ margin: 35, marginLeft: 'auto' }}><Delete style={{ color: '#FFFFFF' }} /></Button>
            </div>
            <form>
              <GridContainer>
                <GridItem xs={12} md={6} align="center">
                  <img
                    src={profileImage}
                    alt="profile"
                    className={imageClasses}
                    style={{ width: 250, height: 250 }}
                  />
                  <br /><br />
                  <Button color="rose" size="md">
                    CHANGE AVATAR
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
                      value: name,
                      name: 'name',
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
                      disabled: true,
                      value: email
                    }}
                  />
                  <CustomInput
                    labelText="First line of address"
                    id="address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Post Code"
                    id="postCode"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: postCode,
                      name: 'postCode',
                      onChange: event => onChangeHandler(event)
                    }}
                  />
                  <InputLabel id="demo-simple-select-label" style={{ marginTop: 15 }}>
                    Maximum distance you would travel for an item
                  </InputLabel>
                  <FormControl required className={classes.formControl}>
                    <Select
                      native
                      value={unit}
                      onChange={event => onChangeHandler(event)}
                      name="unit"
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
                  <Button variant="contained" color="success" size="md" onClick={event => onSubmit(event)}>
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
  initialName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  initialPostCode: PropTypes.string.isRequired
};

export default Profile;
