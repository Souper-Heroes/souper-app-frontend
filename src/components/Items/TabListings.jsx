/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import styles from 'assets/jss/Items/views/MyListingsPage';
import MyItemListings from 'components/Items/MyItemListings';

import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs';

const useStyles = makeStyles(styles);

function getUserItems(type, userProfileId, userItems) {
  return type === 'provide'
    ? userItems.filter((item) => item.provideUserId === userProfileId)
    : userItems.filter((item) => item.collectUserId === userProfileId);
}

export default function ListingTabSection({ userProfile, userItems }) {
  const classes = useStyles();

  const itemsToProvide = getUserItems('provide', userProfile.userId, userItems);
  const itemsToCollect = getUserItems('collect', userProfile.userId, userItems);

  return (
    <div className={classes.section}>
      <CustomTabs
        headerColor='rose'
        plainTabs
        tabs={[
          {
            tabName: 'Listings',
            //TODO tabIcon: Listings,
            tabContent: (
              <MyItemListings type='provide' myitems={itemsToProvide} />
            ),
          },
          {
            tabName: 'Collections',
            //TODO tabIcon: Collections,
            tabContent: (
              <MyItemListings type='collect' myitems={itemsToCollect} />
            ),
          },
        ]}
      />
    </div>
  );
}
