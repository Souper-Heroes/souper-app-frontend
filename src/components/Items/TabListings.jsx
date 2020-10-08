import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/Items/views/TabListings';
import MyItemListings from 'components/Items/MyItemListings';
import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs';

const useStyles = makeStyles(styles);

function getUserItems(type, userProfileId, userItems) {
  let filteredItems = [];

  if (type === 'provide') {
    filteredItems = userItems.filter(
      (item) => item.provideUserId === userProfileId
    );
  } else {
    filteredItems = userItems.filter(
      (item) => item.collectUserId === userProfileId
    );
  }
  return filteredItems;
}

export default function TabListings({ userProfile, userItems }) {
  const classes = useStyles();

  const itemsToProvide = getUserItems('provide', userProfile.userId, userItems);
  const itemsToCollect = getUserItems('collect', userProfile.userId, userItems);

  return (
    <div className={classes.section}>
      <CustomTabs
        headerColor="rose"
        plainTabs
        tabs={[
          {
            tabName: 'Listings',
            tabContent: (
              <MyItemListings
                userProfile={userProfile}
                type="provide"
                myitems={itemsToProvide}
              />
            ),
          },
          {
            tabName: 'Collections',
            tabContent: (
              <MyItemListings
                userProfile={userProfile}
                type="collect"
                myitems={itemsToCollect}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
