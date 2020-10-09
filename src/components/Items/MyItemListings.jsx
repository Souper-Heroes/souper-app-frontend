import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// core components
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/loginPage';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'components/Items/MyItemListing';
import ListingsDropdown from 'components/Items/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPaginations from 'components/Items/ListingsPaginations';

import moment from 'moment';

export default function MyItemListings(props) {
  const history = useHistory();
  useEffect(() => {
    // if (props.isLogged) {
    //   history.push('/');
    // }
  }, []);

  //console.log('PROPS:', props);
  const { type, userId, userItems } = props;
  const classes = makeStyles(styles);
  const paginationColSize = type === 'provide' ? 6 : 12;

  /*
  function getUserItems(type, userId, userItems) {
    let filteredItems = [];

    if (type === 'provide') {
      filteredItems = userItems.filter((item) => item.provideUserId === userId);
    } else {
      // collect
      filteredItems = userItems.filter((item) => item.collectUserId === userId);
    }
    return filteredItems;
  } */
  // const [items, setItems] = useState(getUserItems(type, userId, userItems));

  const sortItems = (menuItem) => {
    props.sortByItem(menuItem);
  };

  /*
  const sortItems = (menuItem) => {
    const newItems = [...items];

    props.sortByItem(menuItem);

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
        if (moment(a.expiryDate) > moment(b.expiryDate)) {
          return 1;
        }
        if (moment(b.expiryDate) > moment(a.expiryDate)) {
          return -1;
        }
        return 0;
      });
    }
    // console.log('Sorted Items:', newItems);
  };*/

  const deleteItem = async (itemId) => {
    //console.log(`Clicked Delete button, delete item with itemId: ${itemId}`);
    await props.deleteItem(itemId);
  };

  return (
    <div>
      <GridContainer>
        <GridItem align="right">
          <ListingsDropdown sortItems={sortItems} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {/* items.map((myItem) => (
            <MyItemListing
              key={myItem.itemId}
              type={type}
              myitem={myItem}
              deleteItem={deleteItem}
            />
          )) */}
          {props.userItems
            .filter((item) =>
              type === 'provide'
                ? item.provideUserId === userId
                : item.collectUserId === userId
            )
            .map((myItem) => (
              <MyItemListing
                key={myItem.itemId}
                type={type}
                myitem={myItem}
                deleteItem={deleteItem}
              />
            ))}
        </GridItem>
        {type === 'provide' && (
          <GridItem xs={6} sm={6} align="left">
            <Link to="/addedititem" className={classes.link}>
              <Button type="button" color="rose" to="/addedititem">
                Add Item
              </Button>
            </Link>
          </GridItem>
        )}
        <GridItem xs={paginationColSize} sm={paginationColSize} align="right">
          <ListingsPaginations />
        </GridItem>
      </GridContainer>
    </div>
  );
}
