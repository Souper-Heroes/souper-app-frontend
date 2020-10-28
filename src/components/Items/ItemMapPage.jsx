/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import styles from 'assets/jss/Items/views/ItemMapPage';
import SimpleMapPage from 'containers/Maps/SimpleMapPage';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

// export default function ItemMapPage({ _id, myitems, loading, getMyItems }) {
export default function ItemMapPage(props) {
  const classes = useStyles();
  const { type } = props;

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <SimpleMapPage type={type} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

ItemMapPage.propTypes = {
  type: PropTypes.string
};
