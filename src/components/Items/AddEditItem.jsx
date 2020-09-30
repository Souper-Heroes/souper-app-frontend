import React, { useState } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Material Kit components
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';

// Date time imports
import Datetime from 'react-datetime';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// TODO - this uses files from views will have to get styles from somewhere else
import styles from 'assets/jss/material-kit-react/views/profilePage';

const useStyles = makeStyles(styles);

export default function AddEditItem({ userItems }) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('1');
  const [description, setDescription] = useState('');
  const [expiry, setExpiry] = useState('');
  

  const [items, setItems] = useState(userItems);

  const handleTitleChange = e => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleCategoryChange = e => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };
  const handleDescriptionChange = e => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };
  const handleExpiryChange = e => {
    console.log(e.target.value);
    setExpiry(e.target.value);
  };

  const [location, setLocation] = useState('');
  const handleLocationChange = e => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };
  
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
    console.log('I toggle ', toggle);
    console.log('I toggle ', postcode);
    setLocation(postcode);
    setChecked(toggle);
  };


  // An attempt at makign the data stick about for a bit
  const addNewItem = e => {
    console.log('onClick: ', title, description);

    // Create a copy of the tasks array
    const updatedItems = items.slice();

    // Create a new task object
    const newItem = {
      itemId: 1000 + items.length + 1, // could use uuid() ??
      provideUserId: 1, // Get from profile
      collectUserId: null,
      photoId: '#1118',
      title: title,
      category: category, // Use an array number instead of string here?
      description: description,
      expiry: expiry,
      location: location, // Get this from profile if required
      preferredProvideTime: '05/10/2020 4PM-6PM',
      preferredCollectTime: ''
    };

    // Add the new task to the array
    updatedItems.push(newItem);
    console.log(newItem);
    // Update the state with the new array
    setItems(updatedItems);
  };

  return (
    <div>
      <Parallax small image={require('assets/img/unsplash-redfruit.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <a href="#LinkToChangeThePic">
                <img
                  src={require('../../assets/img/purple-banana.jpg')}
                  alt="Bananas"
                  className={navImageClasses}
                />
              </a>
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
                  fullWidth: true
                }}
              />
              <CustomInput
                labelText="Description"
                id="float"
                inputProps={{
                  placeholder: 'Describe your item, has it been opened or dropped?',
                  onChange: event => handleDescriptionChange(event)
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
              <div>
                <Select fullWidth labelId="label" id="select" onChange={handleCategoryChange} value={category}>
                  <MenuItem value="1">Fresh produce</MenuItem>
                  <MenuItem value="2">Tinned goods</MenuItem>
                  <MenuItem value="3">Nuts</MenuItem>
                  <MenuItem value="4">Packet</MenuItem>
                  <MenuItem value="5">Frozen</MenuItem>
                  <MenuItem value="6">Meat</MenuItem>
                </Select>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <InputLabel style={{ float: 'left' }} className={classes.label}>
                Expiry date
              </InputLabel>
              <FormControl fullWidth>
                <Datetime
                  inputProps={{
                    placeholder: 'Enter the date the item will expire',
                    onBlur: event => handleExpiryChange(event)
                  }}
                />
              </FormControl>
              <CustomInput
                labelText="Location"
                id="float"
                value={location}
                inputProps={{
                  placeholder: 'Enter a Postcode',
                  onChange: event => handleLocationChange(event),
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
              <FormControlLabel
                style={{ float: 'left' }}
                onChange={handleToggle}
                control={(
                  <Checkbox
                    name="locationSameProfile"
                  />
                  )}
                label="Use location set in User profile?"
              />
            </GridItem>
            <GridItem xs={12} sm={6} container spacing={1} direction="row">
              <GridItem xs={12}>
                <h4 xs={12} md={12} style={{ float: 'left' }}>Available collection time</h4>
              </GridItem>
              <GridItem xs={12} md={6}>
                <InputLabel style={{ float: 'left' }} className={classes.label}>
                  From:
                </InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    inputProps={{ placeholder: 'Enter the time you are availble from' }}
                  />
                </FormControl>
              </GridItem>
              <GridItem xs={12} md={6}>
                <InputLabel style={{ float: 'left' }} className={classes.label}>
                  Till:
                </InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    inputProps={{ placeholder: 'Enter the time you are availble till' }}
                  />
                </FormControl>
              </GridItem>
              <GridItem fullWidth align="right">
                <Button
                  color="danger"
                  size="lg"
                >
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