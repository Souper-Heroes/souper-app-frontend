/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import TabListings from 'components/Items/TabListings';
import MyItemListings from 'components/Items/MyItemListings';
import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs';

const useStyles = makeStyles(styles);

export default function ItemListPage(props) {
  /* const [items, setItems] = useState(userItems);
  const [profile, setProfile] = useState(userProfile); */

  const classes = useStyles();
  const history = useHistory();

  //console.log(props);

  function getUserItems(type, userId, userItems) {
    let filteredItems = [];

    if (type === 'provide') {
      filteredItems = userItems.filter((item) => item.provideUserId === userId);
    } else {
      filteredItems = userItems.filter((item) => item.collectUserId === userId);
    }
    return filteredItems;
  }

  const itemsToProvide = getUserItems('provide', props.userId, props.userItems);
  const itemsToCollect = getUserItems('collect', props.userId, props.userItems);

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <CustomTabs
              headerColor="rose"
              plainTabs
              tabs={[
                {
                  tabName: 'Listings',
                  tabContent: (
                    <MyItemListings type="provide" myitems={itemsToProvide} />
                  ),
                },
                {
                  tabName: 'Collections',
                  tabContent: (
                    <MyItemListings type="collect" myitems={itemsToCollect} />
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
