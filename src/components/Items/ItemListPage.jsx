/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import TabListings from 'components/Items/TabListings';

const useStyles = makeStyles(styles);

export default function ItemListPage({ userProfile, userItems }) {
  const [items, setItems] = useState(userItems);
  const [profile, setProfile] = useState(userProfile);

  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <TabListings userProfile={profile} userItems={items} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}