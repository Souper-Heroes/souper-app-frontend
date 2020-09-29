/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
// import Chat from '@material-ui/icons/Chat';
// import VerifiedUser from '@material-ui/icons/VerifiedUser';
// import Fingerprint from '@material-ui/icons/Fingerprint';
// import Face from '@material-ui/icons/Face';
// import Build from '@material-ui/icons/Build';

// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'components/Items/MyItemListing';
import ListingsDropdown from 'components/Layout/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPagination from '../Layout/ListingsPagination';

// import styles from 'assets/jss/Items/views/MyItemListings';
// import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles(styles);

export default function MyItemListings({ type, myitems }) {
  // const classes = useStyles();

  return (
    <div /* {className={classes.section} } */>
      <GridContainer>
        <GridItem align="right">
          <ListingsDropdown />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {myitems.map((myitem) => (
            <MyItemListing key={myitem.itemId} type={type} myitem={myitem} />
          ))}
        </GridItem>
        {type === 'provide' && (
          <GridItem xs={6} align="left">
            <Button type="button" color="rose">
              Add Item
            </Button>
          </GridItem>
        )}
        {type === 'provide' && (
          <GridItem xs={6} align="right">
            <ListingsPagination />
          </GridItem>
        )}
        {type !== 'provide' && (
          <GridItem xs={12} align="right">
            <ListingsPagination />
          </GridItem>
        )}
      </GridContainer>
    </div>
  );
}
