import React, { useState } from 'react';

// core components
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'components/Items/MyItemListing';
import ListingsDropdown from 'components/Layout/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPagination from '../Layout/ListingsPagination';

//import styles from 'assets/jss/Items/views/MyItemListings';
import styles from 'assets/jss/material-kit-react/views/loginPage.js';
// import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles(styles);

export default function MyItemListings({ type, myitems }) {
  const [items, setItems] = useState(myitems);

  const classes = makeStyles(styles);
  const paginationColSize = type === 'provide' ? 6 : 12;

  const sortItems = (menuItem) => {
    const newItems = [...items];

    if (menuItem === 'Category') {
      newItems.sort((a, b) =>
        a.category > b.category ? 1 : b.category > a.category ? -1 : 0
      );
    } else {
      //  Sort By Expiry Date
      newItems.sort((a, b) =>
        a.expiryDate > b.expiryDate ? 1 : b.expiryDate > a.expiryDate ? -1 : 0
      );
    }
    console.log('Sorted Items:', newItems);

    setItems(newItems);
  };

  return (
    <div>
      <GridContainer>
        <GridItem align='right'>
          <ListingsDropdown sortItems={sortItems} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {items.map((myItem) => (
            <MyItemListing key={myItem.itemId} type={type} myitem={myItem} />
          ))}
        </GridItem>
        {type === 'provide' && (
          <GridItem xs={6} align='left'>
            <Link to='/addedititem' className={classes.link}>
              <Button type='button' color='rose'>
                Add Item
              </Button>
            </Link>
          </GridItem>
        )}
        <GridItem xs={paginationColSize} align='right'>
          <ListingsPagination />
        </GridItem>
      </GridContainer>
    </div>
  );
}
