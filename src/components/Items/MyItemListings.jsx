import React from 'react';
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
  const { _id, type, myitems } = props;
  const classes = makeStyles(styles);
  const paginationColSize = type === 'provide' ? 6 : 6;

  const sortItems = menuItem => {
    props.sortByItem(menuItem);
  };

  const deleteItem = async itemId => {
    // console.log(`Clicked Delete button, delete item with _id: ${_id}`);
    await props.deleteItem(itemId);
  };

  const unreserveItem = async itemId => {
    // console.log(`Clicked Delete button for collector, unreseve item with _id: ${_id}`);
    await props.unreserveItem(itemId);
  };

  const getMyItems = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    myitems.filter(myItem => {
      if (type === 'provide') {
        if (myItem.user_uid === _id) {
          return myItem;
        }
      } else if (myItem.c_user_uid === _id) {
        return myItem;
      }
      return null;
    });

  return (
    <div>
      <GridContainer>
        <GridItem align="right">
          <ListingsDropdown sortItems={sortItems} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {getMyItems().map(myItem => (
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
        {type === 'collect' && (
          <GridItem xs={6} sm={6} align="left">
            <Link to="/itemmap" className={classes.link}>
              <Button type="button" color="rose" to="/addedititem">
                Map
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
  );
}

MyItemListings.propTypes = {
  type: PropTypes.string,
  _id: PropTypes.string,
  myitems: PropTypes.instanceOf(Object),
  deleteItem: PropTypes.func,
  sortByItem: PropTypes.func,
  unreserveItem: PropTypes.func
};
