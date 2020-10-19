/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import styles from 'assets/jss/material-kit-react/views/profilePage';
import MyItemListings from 'containers/Items/MyItemListings';
import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

export default function ItemListPage({
  _id,
  myitems,
  loading,
  getMyItems
}) {
  const classes = useStyles();

  useEffect(() => {
    getMyItems();
  }, [getMyItems]);

  const createCollectionTabs = () => {
    const type = ['Listings', 'Collections'];
    const mytabs = [];

    type.forEach(tab => {
      if (tab === 'Listings') {
        if (myitems.filter(item => item.user_uid === _id).length) {
          mytabs.push({
            tabName: 'Listings',
            tabContent: <MyItemListings type="provide" />
          });
        }
      } else if (tab === 'Collections') {
        if (myitems.filter(item => item.c_user_uid === _id).length) {
          mytabs.push({
            tabName: 'Collections',
            tabContent: <MyItemListings type="collect" />
          });
        }
      }
    });
    return mytabs;
  };

  createCollectionTabs();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} lg={8}>
                <CustomTabs
                  headerColor="rose"
                  plainTabs
                  tabs={createCollectionTabs()}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      )}
    </>
  );
}

ItemListPage.propTypes = {
  _id: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getMyItems: PropTypes.func.isRequired,
  myitems: PropTypes.instanceOf(Object)
};
