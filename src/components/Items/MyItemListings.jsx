import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// core components
import { makeStyles } from '@material-ui/core/styles';
//import styles from 'assets/jss/Items/views/MyItemListings';
import styles from 'assets/jss/material-kit-react/views/loginPage';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'components/Items/MyItemListing';
import ListingsDropdown from 'components/Items/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPaginations from 'components/Items/ListingsPaginations';

// import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles(styles);

export default function MyItemListings({ type, myitems }) {
  const [items, setItems] = useState(myitems);

  const classes = makeStyles(styles);
  const paginationColSize = type === 'provide' ? 6 : 12;

  const sortItems = (menuItem) => {
    const newItems = [...items];

    if (menuItem === 'Category') {
      newItems.sort((a, b) => {
        if (a.category > b.category) {
          return 1;
        }
        if (b.category > a.category) {
          return -1;
        }
        return 0;
      });
    } else {
      //  Sort By Expiry Date
      newItems.sort((a, b) => {
        if (a.expiryDate > b.expiryDate) {
          return 1;
        }
        if (b.expiryDate > a.expiryDate) {
          return -1;
        }
        return 0;
      });
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
          <GridItem xs={6} sm={6} align='left'>
            <Link to='/addedititem' className={classes.link}>
              <Button type='button' color='rose' to='/addedititem'>
                Add Item
              </Button>
            </Link>
          </GridItem>
        )}
        <GridItem xs={paginationColSize} sm={paginationColSize} align='right'>
          <ListingsPaginations />
        </GridItem>
      </GridContainer>
    </div>
  );
}
