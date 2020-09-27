/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import TabListings from 'components/Items/TabListings.js';

const useStyles = makeStyles(styles);

function MyListingsPage({ userProfile, userItems }) {
  //const [userItems, setUserItems] = React.useState(state);

  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <TabListings userProfile={userProfile} userItems={userItems} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default MyListingsPage;
