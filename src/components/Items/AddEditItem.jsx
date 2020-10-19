import React, { useState } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Material Kit components
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';

// Date time imports
import Datetime from 'react-datetime';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// TODO - this uses files from views will have to get styles from somewhere else
import styles from 'assets/jss/material-kit-react/views/profilePage';
import PropTypes from 'prop-types';

// DropZone imports
import DropZone from '../dropzone/DropZone';
// Food categories check boxes
import CatCheckBox from './CatCheckBox';

const useStyles = makeStyles(styles);

export default function AddEditItem({ userItems }) {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const handleTitleChange = e => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const [description, setDescription] = useState('');
  const handleDescriptionChange = e => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };
  const [expiry, setExpiry] = useState(new Date());
  const handleExpiryChange = value => {
    const newDate = value._d.toLocaleDateString('en-GB');
    // console.log(newDate);
    setExpiry(newDate);
  };

  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  // Set to postcode found in profile here
  const [location, setzLocation] = useState('');
  const handleLocationChange = e => {
    // console.log(e.target.value);
    setzLocation(e.target.value);
  };

  // If there's a location set in profile set checked to true
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    let toggle;
    let postcode = '';
    if (checked) {
      postcode = '';
      toggle = false;
    } else {
      // Add postcode from profile here
      postcode = 'SP3 6RN';
      toggle = true;
    }
    setzLocation(postcode);
    setChecked(toggle);
  };

  const [availability, setAvailability] = useState('');
  const handleAvailChange = e => {
    // console.log(e.target.value);
    setAvailability(e.target.value);
  };

  // An attempt at makign the data stick about for a bit
  const [items, setItems] = useState(userItems);
  const [category] = useState(userItems);
  const addNewItem = () => {
    // Create a copy of the tasks array
    const updatedItems = items.slice();

    // Create a new task object
    const newItem = {
      itemId: 1000 + items.length + 1, // DB will assign an ID
      provideUserId: 1, // TODO Get from userProfile
      collectUserId: null,
      photoId: '1117', // TODO Get from DropZone
      title,
      description,
      category, // category from CatCheckBox
      expiry,
      location,
      availability,
    };
    // ## TODO ## set all fields to '' or equivalent.
    // Add the new task to the array
    updatedItems.push(newItem);
    // console.log(newItem);
    // Update the state with the new array
    setItems(updatedItems);
  };

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <DropZone />
            </GridItem>
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <CustomInput
                labelText="Title"
                id="float"
                inputProps={{
                  placeholder: 'Give your item a name',
                  onChange: event => handleTitleChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Description"
                id="float"
                inputProps={{
                  placeholder:
                    'Describe your item, has it been opened or dropped?',
                  onChange: event => handleDescriptionChange(event),
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CatCheckBox category={category} />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <InputLabel style={{ float: 'left' }} className={classes.label}>
                Expiry date
              </InputLabel>
              <br />
              <FormControl fullWidth>
                <Datetime
                  className={classes.bottomFilter}
                  name="expiry"
                  timeFormat={false}
                  dateFormat="DD/MM/yyyy"
                  value={expiry}
                  isValidDate={valid}
                  onChange={handleExpiryChange}
                  input={false}
                />
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={6} container spacing={1} direction="row">
              <GridItem xs={12}>
                <CustomInput
                  labelText="Available collection times"
                  id="float"
                  inputProps={{
                    placeholder:
                      'e.g. Weekdays between 9 and 5pm, and all day Sunday',
                    onChange: event => handleAvailChange(event),
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Location"
                  id="float"
                  name="location"
                  inputProps={{
                    placeholder: 'Enter a Postcode',
                    onChange: event => handleLocationChange(event),
                    value: `${location}`,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <FormControlLabel
                  style={{ float: 'left' }}
                  onChange={handleToggle}
                  control={<Checkbox name="locationSameProfile" />}
                  label="Use location set in User profile?"
                />
              </GridItem>
              <GridItem fullWidth align="right">
                <Button color="danger" size="lg">
                  Cancel
                </Button>
                <Button
                  color="success"
                  size="lg"
                  onClick={event => addNewItem(event)}
                >
                  Save
                </Button>
              </GridItem>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

AddEditItem.propTypes = {
  userItems: PropTypes.instanceOf(Array)
};
