import React, { useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// @material Typography
import Danger from '../MaterialKitComponents/Typography/Danger';
// core components
import GridContainer from '../MaterialKitComponents/Grid/GridContainer';
import GridItem from '../MaterialKitComponents/Grid/GridItem';
import Button from '../MaterialKitComponents/CustomButtons/Button';
import Card from '../MaterialKitComponents/Card/Card';
import CardBody from '../MaterialKitComponents/Card/CardBody';
import CardHeader from '../MaterialKitComponents/Card/CardHeader';
import CardFooter from '../MaterialKitComponents/Card/CardFooter';
import CustomInput from '../MaterialKitComponents/CustomInput/CustomInput';

import styles from '../../assets/jss/material-kit-react/views/loginPage';
import image from '../../assets/img/board.jpg';

const useStyles = makeStyles(styles);

export default function LoginPage({ loginError, isAuthenticated, login }) {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  setTimeout(() => {
    setCardAnimation('');
  }, 700);

  const handleClick = async () => {
    await login(emailRef.current.value, passRef.current.value);
  };

  return (
    <div>
      <div
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
                    <h2>Login</h2>
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
                    {loginError ? (
                      <Danger>Incorrect email or Password</Danger>
                    ) : null}
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'email',
                        inputRef: emailRef,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'password',
                        inputRef: passRef,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off'
                      }}
                    />
                  </CardBody>
                  <GridContainer justify="center">
                    <Link to="/forgotten" className={classes.link}>
                      <Button
                        simple
                        color="info"
                        size="lg"
                        to="/ForgottenPassword"
                      >
                        FORGOTTEN PASSWORD?
                      </Button>
                    </Link>
                  </GridContainer>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      fullWidth
                      size="lg"
                      color="rose"
                      onClick={handleClick}
                    >
                      Log in
                    </Button>
                  </CardFooter>
                  <Link to="/register">
                    <CardFooter className={classes.cardFooter}>
                      <Button fullWidth size="lg" color="info">
                        Register
                      </Button>
                    </CardFooter>
                  </Link>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
