import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
//import Chat from '@material-ui/icons/Chat';
//import VerifiedUser from '@material-ui/icons/VerifiedUser';
//import Fingerprint from '@material-ui/icons/Fingerprint';
//import Face from '@material-ui/icons/Face';
//import Build from '@material-ui/icons/Build';
// core components
//components/MaterialKitComponents/Grid/GridContainer.js
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
//import InfoArea from 'components/MaterialKitComponents/InfoArea/InfoArea.js';
//import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs.js';
import MyItemListing from 'components/Layout/MyItemListing.js';
import MyItemListing2 from 'components/Layout/MyItemListing2.js';
import styles from 'assets/jss/Items/views/MyItemListings.js';
import Divider from '@material-ui/core/Divider';
import ListingsDropdown from 'components/Layout/ListingsDropdown.js';
import ListingsPagination from './ListingsPagination';
//import Paginations from 'components/MaterialKitComponents/Pagination/Pagination.js';

const useStyles = makeStyles(styles);

export default function MyItemListings() {
  const classes = useStyles();

  return (
    <div /* {className={classes.section} } */>
      <GridContainer justify='center'>
        <GridItem align='right'>
          <ListingsDropdown />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <MyItemListing />
          <Divider xs={12} variant='middle' component='li' />
          <MyItemListing />
        </GridItem>
        <GridItem align='right'>
          <ListingsPagination />
        </GridItem>
      </GridContainer>
    </div>
  );
}
