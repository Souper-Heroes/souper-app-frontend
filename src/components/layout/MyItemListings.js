import React from 'components/Layout/node_modules/react';
// @material-ui/core components
import { makeStyles } from 'components/Layout/node_modules/@material-ui/core/styles';

// @material-ui/icons
//import Chat from '@material-ui/icons/Chat';
//import VerifiedUser from '@material-ui/icons/VerifiedUser';
//import Fingerprint from '@material-ui/icons/Fingerprint';
//import Face from '@material-ui/icons/Face';
//import Build from '@material-ui/icons/Build';
// core components
import GridContainer from 'components/Layout/node_modules/components/MaterialKitComponents/Grid/GridContainer.js.js';
import GridItem from 'components/Layout/node_modules/components/MaterialKitComponents/Grid/GridItem.js.js';
//import InfoArea from 'components/MaterialKitComponents/InfoArea/InfoArea.js';
//import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs.js';
import ItemListing from 'components/Layout/node_modules/components/layout/MyItemListing.js.js';
import styles from 'components/Layout/node_modules/assets/jss/Items/views/MyItemListings.js.js';

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
