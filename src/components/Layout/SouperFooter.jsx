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
        <div className={classes.left}>
          <a
            href="#ADD_ABOUT_PAGE_HERE"
            className={classes.block}
            target="_blank"
          >
            About us
          </a>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made with <Favorite
            className={classes.icon} /> by <a href="https://github.com/Souper-Heroes" target="_blank">The Souper Heroe</a> for a better web.
        </div>
      </div>
    </footer>
  );
}
export default SouperFooter;
