import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// material-ui components

import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Material Kit components
import Parallax from "./MaterialKitComponents/Parallax/Parallax"
import Button from "./MaterialKitComponents/CustomButtons/Button.js";
import GridContainer from "./MaterialKitComponents/Grid/GridContainer.js";
import GridItem from "./MaterialKitComponents/Grid/GridItem.js";
import CustomInput from "./MaterialKitComponents/CustomInput/CustomInput.js";

// @material-ui/icons
// import Check from "@material-ui/icons/Check";
// assets
import FoodPic from '../assets/img/purple-banana.jpg';

// TODO - this uses files from views will have to get styles from somewhere else
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { CalendarToday } from '@material-ui/icons';
const useStyles = makeStyles(styles);


export default function AddEditItem(props) {
  
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  
  return (
    <div>
      <Parallax small filter image={require("assets/img/unsplash-redfruit.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
       
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
                <a href="#LinkToChangeThePic">
                  <img        
                      src={FoodPic}
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
                    placeholder: "Give your item a name"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                />  
                <CustomInput
                    labelText="Description"
                    id="float"
                    inputProps={{
                      placeholder: "Describe your item, has it been opened or dropped?"
                    }}
                    formControlProps={{
                        fullWidth: true
                    }}
                 />            
                <div>
                    <Select fullWidth labelId='label' id='select' value='10'>
                      <MenuItem value='10'>Fresh produce</MenuItem>
                      <MenuItem value='20'>Tinned goods</MenuItem>
                      <MenuItem value='20'>Packet</MenuItem>
                      <MenuItem value='20'>Frozen</MenuItem>
                    </Select>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <TextField
                  id="date"
                  label="Expiry date"
                  type="date"
                  defaultValue={CalendarToday}
                  fullWidth
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />    
               <CustomInput
                    labelText="Location"
                    id="float"
                    inputProps={{
                      placeholder: "Enter a Postcode"
                    }}
                    formControlProps={{
                        fullWidth: true
                    }}
                 />   
                <FormControlLabel 
                  control={
                    <Checkbox name="locationSameProfile" />} 
                    label="Use location set in User profile?" 
                /> 
              </GridItem>
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
                <p>Available collection time</p>
                <GridItem container direction='row'>
                  <GridItem xs={12} sm={6} className={classes.navWrapper}>
                      <TextField
                        id="date"
                        label="From:"
                        type="date"
                        defaultValue={CalendarToday}    
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />      
                  </GridItem>
                  <GridItem xs={12} sm={6} className={classes.navWrapper}>
                      <TextField
                        id="date"
                        label="To:"
                        type="date"
                        defaultValue={CalendarToday}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      /> 
                  </GridItem>
                </GridItem>
              </GridItem>
            </GridContainer>
          </div>
      </div>
    </div>
  );
}
