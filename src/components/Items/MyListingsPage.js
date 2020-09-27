/* eslint-disable react/jsx-filename-extension */
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
import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import ListingTabSection from './Sections/ListingTabSection.js';

const useStyles = makeStyles(styles);

function MyListingsPage({ userProfile, userItems }) {
  //const [userItems, setUserItems] = React.useState(state);

  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <ListingTabSection
              userProfile={userProfile}
              userItems={userItems}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default MyListingsPage;
