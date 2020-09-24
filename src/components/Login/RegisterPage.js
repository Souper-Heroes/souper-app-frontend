import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
//import People from "@material-ui/icons/People";
import Face from '@material-ui/icons/Face';
// core components
//import Navbar from 'components/layout/Navbar';
//import Header from "components/MaterialKitComponents/Header/Header.js";
//import HeaderLinks from "components/MaterialKitComponents/Header/HeaderLinks.js";
//import Footer from "components/MaterialKitComponents/Footer/Footer.js";
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import Button from 'components/MaterialKitComponents/CustomButtons/Button.js';
import Card from 'components/MaterialKitComponents/Card/Card.js';
import CardBody from 'components/MaterialKitComponents/Card/CardBody.js';
import CardHeader from 'components/MaterialKitComponents/Card/CardHeader.js';
import CardFooter from 'components/MaterialKitComponents/Card/CardFooter.js';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput.js';
import CheckboxGeneric from 'components/layout/CheckboxGeneric.js';
import SouperFooter from 'components/layout/SouperFooter.js';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';

import image from 'assets/img/board.jpg';

const useStyles = makeStyles(styles);

export default function RegisterPage({ textlabels }) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(function () {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  //const { ...rest } = props;

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color='rose' className={classes.cardHeader}>
                    <h2>Register</h2>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={'fab fa-twitter'} />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={'fab fa-facebook'} />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={'fab fa-google-plus-g'} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    {textlabels.map((label) => (
                      <CustomInput
                        labelText={label.label}
                        id={label.id}
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: `${label.type}`,
                          endAdornment: (
                            <InputAdornment position='start'>
                              {label.icon === 'face' && (
                                <Face className={classes.inputIconsColor} />
                              )}
                              {label.icon === 'email' && (
                                <Email className={classes.inputIconsColor} />
                              )}
                              {label.icon === 'lock' && (
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    ))}

                    <CheckboxGeneric>
                      <strong>Terms And Conditions</strong>
                    </CheckboxGeneric>
                    <Button fullWidth size='lg' color='rose'>
                      Create Account
                    </Button>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button fullWidth size='lg' color='info'>
                      Log In
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <SouperFooter />
    </div>
  );
}
