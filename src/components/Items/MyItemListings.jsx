import React from 'react';

// core components
//import Link from '@material-ui/core/Link';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'components/Items/MyItemListing';
import ListingsDropdown from 'components/Layout/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPagination from '../Layout/ListingsPagination';

export default function MyItemListings({ type, myitems }) {
  return (
    <div>
      <GridContainer>
        <GridItem align='right'>
          <ListingsDropdown />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {myitems.map((myitem) => (
            <MyItemListing key={myitem.itemId} type={type} myitem={myitem} />
          ))}
        </GridItem>
        {type === 'provide' && (
          <GridItem xs={6} align='left'>
            <Button type='button' color='rose'>
              Add Item
            </Button>
          </GridItem>
        )}
        {type === 'provide' && (
          <GridItem xs={6} align='right'>
            <ListingsPagination />
          </GridItem>
        )}
        {type !== 'provide' && (
          <GridItem xs={12} align='right'>
            <ListingsPagination />
          </GridItem>
        )}
      </GridContainer>
    </div>
  );
}
