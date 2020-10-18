/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import MyItemListings from 'containers/Items/MyItemListings';
import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs';

const useStyles = makeStyles(styles);

export default function ItemListPage({ _id, citems, pitems }) {
  const classes = useStyles();

  const createCollectionTabs = () => {
    const type = ["Listings", "Collections"]
    let mytabs = [];

    type.forEach(tab => {
      if (tab === "Listings" ) {
        if (pitems.length) {
          mytabs.push({
            tabName: 'Listings',
            tabContent: <MyItemListings type="provide" />,
          });
        }
      }
      else if (tab === "Collections" ) {
        if (citems.length) {
        
          mytabs.push({
            tabName: 'Collections',
            tabContent: <MyItemListings type="collect" />,
          });
        }
      }     
    })
    console.log("MY TAB",mytabs);
    return mytabs; 
  }

  createCollectionTabs();

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <CustomTabs
              headerColor="rose"
              plainTabs
              tabs={createCollectionTabs()}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
