/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Face from '@material-ui/icons/Face';
import Build from '@material-ui/icons/Build';
// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import InfoArea from 'components/MaterialKitComponents/InfoArea/InfoArea.js';
import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs.js';
//import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
import styles from 'assets/jss/Items/views/MyListingsPage.js';
import MyItemListings from 'components/Layout/MyItemListings.js';

const useStyles = makeStyles(styles);

function getUserItems(type, userItems) {
  return userItems.filter((item) => item.type === type);
}

export default function ListingTabSection({ userItems }) {
  const classes = useStyles();

  const itemsToProvide = getUserItems('p', userItems);
  const itemsToCollect = getUserItems('c', userItems);

  return (
    <div className={classes.section}>
      <CustomTabs
        headerColor='rose'
        plainTabs
        tabs={[
          {
            tabName: 'Listings',
            //TODO tabIcon: Face,
            tabContent: (
              <MyItemListings type='provide' myitems={itemsToProvide} />
            ),
          },
          {
            tabName: 'Collections',
            //TODO tabIcon: Chat,
            tabContent: (
              <MyItemListings type='collection' myitems={itemsToCollect} />
            ),
          },
        ]}
      />
    </div>
  );
}
