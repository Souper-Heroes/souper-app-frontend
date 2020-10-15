import React from 'react';
import { Link } from 'react-router-dom';

// core components
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/loginPage';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import MyItemListing from 'components/Items/MyItemListing';
import ListingsDropdown from 'components/Items/ListingsDropdown';
import Button from 'components/CustomButtons/Button';
import ListingsPaginations from 'components/Items/ListingsPaginations';
import PropTypes from 'prop-types';

export default function MyItemListings(props) {
  const { type, items } = props;
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

  const getItems = () =>
    // eslint-disable-next-line array-callback-return
    // eslint-disable-next-line implicit-arrow-linebreak
    items.filter(myItem => {
      if (type === 'provide') {
        if (myItem.user_id === props._id) {
          return myItem;
        }
      } else if (myItem.c_user_id === props._id) {
        return myItem;
      }
      return null;
    });

  return (
    <div>
      <GridContainer>
        <GridItem align="right">
          {getItems().length > 0 && <ListingsDropdown sortItems={sortItems} />}
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {getItems().map(myItem => (
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
        <GridItem xs={paginationColSize} sm={paginationColSize} align="right">
          {getItems().length > 0 && <ListingsPaginations />}
        </GridItem>
      </GridContainer>
    </div>
  );
}

MyItemListings.propTypes = {
  type: PropTypes.string,
  _id: PropTypes.string,
  items: PropTypes.instanceOf(Array),
  deleteItem: PropTypes.func,
  sortByItem: PropTypes.func,
  unreserveItem: PropTypes.func,
};
