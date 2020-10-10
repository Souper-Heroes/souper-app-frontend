/* eslint-disable react/jsx-filename-extension */

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// @material Typography
import Danger from '../MaterialKitComponents/Typography/Danger';
// import People from "@material-ui/icons/People";
import Face from '@material-ui/icons/Face';
// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import Card from 'components/MaterialKitComponents/Card/Card';
import CardBody from 'components/MaterialKitComponents/Card/CardBody';
import CardHeader from 'components/MaterialKitComponents/Card/CardHeader';
import CardFooter from 'components/MaterialKitComponents/Card/CardFooter';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import CheckboxTermsAndConds from 'components/Login/CheckboxTermsAndConds';
import SouperFooter from 'components/Layout/SouperFooter';
import styles from 'assets/jss/material-kit-react/views/loginPage';
import image from 'assets/img/board.jpg';

const useStyles = makeStyles(styles);

export default function RegisterPage({
  signUpError,
  isAuthenticated,
  registerInputs,
  signUp
}) {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [checkedTermsAndConds, setcheckedTermsAndConds] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const checkTermsAndConds = checkedValue => {
    setcheckedTermsAndConds(checkedValue);
  };

  const handleSubmit = async () => {
    await signUp(email, password, displayName);
  };

  const handleInputChange = event => {
    const { id, value } = event.currentTarget;

    if (id === 'name') {
      setDisplayName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
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
                    {signUpError ? <Danger>{signUpError}</Danger> : null}
                    {registerInputs.map(input => (
                      <CustomInput
                        labelText={input.label}
                        id={input.id}
                        key={input.id}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          id: `${input.id}`,
                          type: `${input.type}`,

                          onChange: event => handleInputChange(event),

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
                          )
                        }}
                      />
                    ))}

                    <CheckboxTermsAndConds
                      checkTermsAndConds={checkTermsAndConds}
                    >
                      <Link to="/register">
                        <strong>Terms And Conditions</strong>{' '}
                      </Link>
                    </CheckboxTermsAndConds>

                    <Button
                      disabled={checkedTermsAndConds}
                      fullWidth
                      size="lg"
                      color="rose"
                      onClick={handleSubmit}
                    >
                      Create Account
                    </Button>
                  </CardBody>
                  <Link to="/login">
                    <CardFooter className={classes.cardFooter}>
                      <Button fullWidth size="lg" color="info">
                        Log In
                      </Button>
                    </CardFooter>
                  </Link>
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
