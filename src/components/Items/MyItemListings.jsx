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

  const deleteItem = async itemId => {
    // console.log(`Clicked Delete button, delete item with itemId: ${itemId}`);
    await props.deleteItem(itemId);
  };

  return (
    <div>
      <GridContainer>
        <GridItem align="right">
          <ListingsDropdown sortItems={sortItems} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          {items
            .filter(item => props.uuid === (type === 'provide' ? item.provideUserId : item.collectUserId))
            .map(myItem => (<MyItemListing key={myItem.itemId} type={type} myitem={myItem} deleteItem={deleteItem} />))}
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

MyItemListings.propTypes = {
  type: PropTypes.string,
  uuid: PropTypes.string,
  items: PropTypes.instanceOf(Array),
  deleteItem: PropTypes.func,
  sortByItem: PropTypes.func
};
