/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// import People from "@material-ui/icons/People";
import Face from '@material-ui/icons/Face';
// core components
// import Navbar from 'components/Layout/Navbar';
// import Header from "components/MaterialKitComponents/Header/Header";
// import HeaderLinks from "components/MaterialKitComponents/Header/HeaderLinks";
// import Footer from "components/MaterialKitComponents/Footer/Footer";
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import Card from 'components/MaterialKitComponents/Card/Card';
import CardBody from 'components/MaterialKitComponents/Card/CardBody';
import CardHeader from 'components/MaterialKitComponents/Card/CardHeader';
import CardFooter from 'components/MaterialKitComponents/Card/CardFooter';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import CheckboxGeneric from 'components/Layout/CheckboxGeneric';
import SouperFooter from 'components/Layout/SouperFooter';

import styles from 'assets/jss/material-kit-react/views/loginPage';

import image from 'assets/img/board.jpg';

const useStyles = makeStyles(styles);

export default function RegisterPage({ registerInputs }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');

  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();

  const onChangeHandler = event => {
    const { id, value } = event.currentTarget;
    if (id === 'first') {
      setName(value);
    } else if (id === 'second') {
      setEmail(value);
    } else if (id === 'third') {
      setPassword(value);
    }
  };

  const [checked, setChecked] = React.useState(false);
  const handleToggle = () => {
    let value;
    if (checked) {
      value = false;
      setButtonDisabled(true);
    } else {
      value = true;
      setButtonDisabled(false);
    }
    setChecked(value);
  };

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h2>Register</h2>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    {registerInputs.map(input => (
                      <CustomInput
                        labelText={input.label}
                        id={input.id}
                        key={input.id}
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: `${input.type}`,
                          onChange: event => onChangeHandler(event),
                          endAdornment: (
                            <InputAdornment position="start">
                              {input.icon === 'face' && (
                                <Face className={classes.inputIconsColor} />
                              )}
                              {input.icon === 'email' && (
                                <Email className={classes.inputIconsColor} />
                              )}
                              {input.icon === 'lock' && (
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    ))}

                    <CheckboxGeneric handleToggle={handleToggle}>
                      <strong>Terms And Conditions</strong>
                    </CheckboxGeneric>
                    <Button disabled={buttonDisabled} fullWidth size="lg" color="rose">
                      Create Account
                    </Button>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button fullWidth size="lg" color="info">
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

RegisterPage.propTypes = {
  registerInputs: PropTypes.array
};
