import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// core components
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/loginPage';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'containers/Items/MyItemListing';
import ListingsDropdown from 'components/Items/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPaginations from 'components/Items/ListingsPaginations';
import PropTypes from 'prop-types';

export default function MyItemListings(props) {
  console.log('*** MY ITEM LISTINGSSSS PROPS:', props);
  const { _id, type, pitems, citems } = props;

  // console.log('*** items:', props.items);

  //useEffect(() => {
  //  console.log('Calling MyItemListings UseEffect');
  //  getProviderItems(_id);
  //}, []);

  //useEffect(() => {
  //   getProviderItems(_id);
  //   getCollectorItems(_id);
  // }, [getProviderItems, getCollectorItems]);

  const classes = makeStyles(styles);
  const paginationColSize = type === 'provide' ? 6 : 12;

  const sortItems = menuItem => {
    props.sortByItem(menuItem);
  };

  const deleteItem = async _id => {
    // console.log(`Clicked Delete button, delete item with _id: ${_id}`);
    await props.deleteItem(_id);
  };

  const unreserveItem = async (_id, itemId) => {
    // console.log(`Clicked Delete button for collector, unreseve item with _id: ${_id}`);
    await props.unreserveItem(_id, itemId);
  };

  //const getMyItems = () =>
  // eslint-disable-next-line implicit-arrow-linebreak

  //  pitems.filter(myItem => {
  //    if (type === 'provide') {
  //      if (myItem.user_uid === props._id) {
  //        return myItem;
  //      }
  //    } else if (myItem.c_user_uid === props._id) {
  //      return myItem;
  //    }
  //    return null;
  //  });
  let items = null;
  if (type === 'provide') {
    items = pitems;
  } else {
    items = citems;
  }

  return (
    <>
      {items == null || !items.length ? (
        <div>Loading...</div>
      ) : (
        <div>
          <GridContainer>
            <GridItem align="right">
              <ListingsDropdown sortItems={sortItems} />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              {items.map(myItem => (
                <MyItemListing
                  key={myItem._id}
                  type={type}
                  myitem={myItem}
                  deleteItem={deleteItem}
                  unreserveItem={unreserveItem}
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
            <GridItem
              xs={paginationColSize}
              sm={paginationColSize}
              align="right"
            >
              <ListingsPaginations />
            </GridItem>
          </GridContainer>
        </div>
      )}
    </>
  );
}

MyItemListings.propTypes = {
  type: PropTypes.string,
  _id: PropTypes.string,
  //items: PropTypes.instanceOf(Array),
  deleteItem: PropTypes.func,
  sortByItem: PropTypes.func,
  unreserveItem: PropTypes.func,
  getProviderItems: PropTypes.func,
};
