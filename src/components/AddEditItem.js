import React from "react";
// Get dateTime
import Datetime from "react-datetime";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';


// material-ui components

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Material Kit components
import Parallax from "./MaterialKitComponents/Parallax/Parallax"
import Button from "./MaterialKitComponents/CustomButtons/Button.js";
import GridContainer from "./MaterialKitComponents/Grid/GridContainer.js";
import GridItem from "./MaterialKitComponents/Grid/GridItem.js";
import CustomInput from "./MaterialKitComponents/CustomInput/CustomInput.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// assets
import FoodPic from "assets/img/purple-banana.jpg";

//TODO - this uses files from views will have to get styles from somewhere else
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);



export default function AddEditItem(props) {
  const [checked, setChecked] = React.useState([24, 22]);  
  const classes = useStyles();

  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );  
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Parallax small filter image={require("assets/img/unsplash-redfruit.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
                <img        
                    src={FoodPic}
                    alt="Bananas"
                    className={navImageClasses}  
                />
              </GridItem>
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
                <CustomInput
                  labelText="Title"
                  id="float"
                  formControlProps={{
                      fullWidth: true
                  }}
                />  
                <CustomInput
                    labelText="Description"
                    id="float"
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
                <div>
                    <InputLabel className={classes.label}>
                        Enter the Date and Time the Item is available from.
                    </InputLabel>
                    <br />
                    <FormControl fullWidth>
                        <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                        />
                    </FormControl>
                </div>     
               <CustomInput
                    labelText="Location"
                    id="float"
                    formControlProps={{
                        fullWidth: true
                    }}
                 />   
                <div className={wrapperDiv}>
                    <FormControlLabel
                    control={
                        <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(21)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{ checked: classes.checked }}
                        />
                    }
                    classes={{ label: classes.label }}
                    label="Same location as profile?"
                    />
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} className={classes.navWrapper}>
               <h3>This is number two!</h3>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      
    </div>
  );
}
