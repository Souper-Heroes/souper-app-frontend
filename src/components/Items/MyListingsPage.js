import React from 'react';
import Header from 'components/Layout/Header.js';
import HeaderLinks from 'components/Layout/HeaderLinks.js';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';

import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import ListingTabSection from './Sections/ListingTabSection.js';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

const useStyles = makeStyles(styles);

function MyListingsPage() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <ListingTabSection />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default MyListingsPage;
