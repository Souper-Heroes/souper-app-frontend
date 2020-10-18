import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import profileImage from 'assets/img/faces/christian.jpg';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(styles);

export default function Profile() {
  const [distance, setDistance] = React.useState('miles');
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '|',
    },
    {
      value: 2,
      label: '|',
    },
    {
      value: 3,
      label: '|',
    },
    {
      value: 4,
      label: '|',
    },
    {
      value: 5,
      label: '5',
    },
  ];
  const valuetext = value => `${value} Miles`;
  const handleChange = event => setDistance(event.target.value);

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} md={8} >
            <div style={{ display: "flex" }}>
              <h2 className={classes.title} >  Profile  </h2>
              <Button justIcon  round color="rose" style={{margin: 35, marginLeft: "auto" }} ><Delete style={{color: "#FFFFFF"}}/></Button>
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
                  <Button   color="rose" size="md">
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
                  />
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
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
                  />
                  <InputLabel id="demo-simple-select-label">
                    Maximum distance you would travel for an item
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={distance}
                    onChange={handleChange}
                  >
                    <MenuItem value="miles">in Miles</MenuItem>
                    <MenuItem value="km">in Km</MenuItem>
                  </Select>
                  <Slider
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    min={0}
                    max={5}
                    step={0.1}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                  <Button variant="contained" color="success" size="md">
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
