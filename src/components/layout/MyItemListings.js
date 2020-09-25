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
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
//import InfoArea from 'components/MaterialKitComponents/InfoArea/InfoArea.js';
//import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs.js';
import ItemListing from 'components/layout/MyItemListing.js';
import styles from 'assets/jss/Items/views/MyItemListings.js';

const useStyles = makeStyles(styles);

export default function MyItemListings() {
  const classes = useStyles();

  return (
    <div /* {className={classes.section} } */>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={12}>
          <ItemListing />
        </GridItem>
      </GridContainer>
    </div>
  );
}
