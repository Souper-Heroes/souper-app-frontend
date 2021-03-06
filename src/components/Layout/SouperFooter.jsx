import React from 'react';

// import Footer from '../MaterialKitComponents/Footer/Footer';

// nodejs library that concatenates classes
// import classNames from "classnames";
// import { List, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import styles from '../../assets/jss/material-kit-react/components/footerStyle';

const useStyles = makeStyles(styles);

function SouperFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made with{' '}
          <Favorite className={classes.icon} /> by
          <a
            href="https://github.com/Souper-Heroes"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            The Souper Heroes{' '}
          </a>{' '}
          for a better web.
        </div>
      </div>
    </footer>
  );
}
export default SouperFooter;
