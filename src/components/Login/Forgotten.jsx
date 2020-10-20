import React, { useState } from 'react';
import * as ROUTES from 'components/Routing/routes';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import Card from 'components/MaterialKitComponents/Card/Card';
import CardBody from 'components/MaterialKitComponents/Card/CardBody';
import CardHeader from 'components/MaterialKitComponents/Card/CardHeader';
import CardFooter from 'components/MaterialKitComponents/Card/CardFooter';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';
import Muted from 'components/MaterialKitComponents/Typography/Muted';
import SocialLogin from 'containers/Login/SocialLogin';
import Alert from 'components/Alert/Alert';

import styles from 'assets/jss/material-kit-react/views/loginPage';
import image from 'assets/img/board.jpg';
import { Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Forgotten({isAuthenticated, passwordReset}) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  const [email, setEmail] = useState('');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();

  const handleSubmit = async () => {
    passwordReset(email);
  };
  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setEmail(value);
  };

  if (isAuthenticated) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

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
            <GridItem xs={10} sm={8} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    <h4>Reset Password</h4>
                    <SocialLogin />
                  </CardHeader>
                  <CardBody>
                    <Alert />
                    <Muted>
                      <b>Forgotten your password?</b><br />
                      Enter the email address that you used to register. We'll
                      send you an email with a link to reset your password.
                    </Muted>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'email',
                        onChange: event => handleInputChange(event),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      fullWidth
                      to="#TODO_Send email"
                      variant="contained"
                      color="rose"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Reset
                    </Button>
                  </CardFooter>
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
    </div>
  );
}

Forgotten.propTypes = {
  passwordReset: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};