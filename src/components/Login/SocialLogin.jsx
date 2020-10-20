import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from 'assets/jss/material-kit-react/views/loginPage';
import Button from '../MaterialKitComponents/CustomButtons/Button';

const useStyles = makeStyles(styles);

export default function SocialLogin({ loginWithGoogle, loginWithFacebook }) {
  const classes = useStyles();
  const handleSubmit = async event => {
    const { name } = event.currentTarget;
    if (name === 'loginWithGoogle') {
      loginWithGoogle();
    } else if (name === 'loginWithFacebook') {
      loginWithFacebook();
    }
  };

  return (
    <>
      <div className={classes.socialLine}>
        <Button
          justIcon
          href="#pablo"
          color="transparent"
          onClick={e => e.preventDefault()}
        >
          <i className="fab fa-twitter" />
        </Button>
        <Button
          justIcon
          name="loginWithFacebook"
          href="#pablo"
          color="transparent"
          onClick={handleSubmit}
        >
          <i className="fab fa-facebook" />
        </Button>
        <Button
          justIcon
          name="loginWithGoogle"
          color="transparent"
          onClick={handleSubmit}
        >
          <i className="fab fa-google-plus-g" />
        </Button>
      </div>
    </>
  );
}

SocialLogin.propTypes = {
  loginWithGoogle: PropTypes.func,
  loginWithFacebook: PropTypes.func
};
