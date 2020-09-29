import React from 'react';

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
import Parallax from "./MaterialKitComponents/Parallax/Parallax"
import Button from "./MaterialKitComponents/CustomButtons/Button.js";
import GridContainer from "./MaterialKitComponents/Grid/GridContainer.js";
import GridItem from "./MaterialKitComponents/Grid/GridItem.js";
import CustomInput from "./MaterialKitComponents/CustomInput/CustomInput.js";

// Date time imports
import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// TODO - this uses files from views will have to get styles from somewhere else
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default function AddEditItem(props) {

  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Parallax small image={require("assets/img/unsplash-redfruit.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
                <a href="#LinkToChangeThePic">
                  <img        
                      src={require("../assets/img/purple-banana.jpg")}
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
                  <InputLabel style={{float:'left'}} className={classes.label}>
                    Expiry date
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Enter the date the item will expire" }}
                    />
                  </FormControl>
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
                  style={{float:'left'}}
                  control={
                    <Checkbox  
                    name="locationSameProfile" />} 
                    label="Use location set in User profile?" 
                /> 
              </GridItem>
              <GridItem xs={12} sm={6} container spacing={1} direction='row' >
                <GridItem xs={12} >
                  <h4 xs={12} md={12} style={{float:'left'}}>Available collection time</h4>
                  </GridItem>
                  <GridItem xs={12} md={6} >
                    <InputLabel  style={{float:'left'}} className={classes.label}>
                        From:
                      </InputLabel>
                      <br />
                      <FormControl fullWidth>
                        <Datetime
                          inputProps={{ placeholder: "Enter the time you are availble from" }}
                        />
                      </FormControl>
                  </GridItem>
                  <GridItem  xs={12} md={6} >
                    <InputLabel style={{float:'left'}} className={classes.label}>
                        Till:
                      </InputLabel>
                      <br />
                      <FormControl fullWidth>
                        <Datetime
                          inputProps={{ placeholder: "Enter the time you are availble till" }}
                        />
                      </FormControl>
                  </GridItem>
                  <GridItem fullWidth align='right'>
                      <Button 
                        color="danger" size="lg">
                        Cancel
                      </Button>
                      <Button
                       color="success" size="lg">
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
