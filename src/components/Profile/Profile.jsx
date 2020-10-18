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
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Profile
            </h2>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Display name"
                    id="displayName"
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
                  <InputLabel style={{ marginTop: 15 }} id="demo-simple-select-label">
                    Item distance
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
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <img
                    src={profileImage}
                    alt="profile"
                    className={imageClasses}
                    style={{
                      width: 250, height: 250, marginTop: 20, marginLeft: 20
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Button style={{ marginTop: 20 }} variant="contained" color="success" size="lg">
                    CHANGE AVATAR
                  </Button>
                  <Button variant="contained" size="lg">
                    DELETE ACCOUNT
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Button variant="contained" color="rose" size="lg" onClick={event => onSubmit(event)}>
                    SAVE CHANGES
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
