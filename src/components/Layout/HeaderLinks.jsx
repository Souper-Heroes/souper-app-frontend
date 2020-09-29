/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import { Face } from '@material-ui/icons';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText='Account'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Face}
          dropdownList={[
            <Link to='/profile' className={classes.dropdownLink}>
              My Account
            </Link>,
            <Link to='/' className={classes.dropdownLink}>
              Dashboard
            </Link>,
            <Link to='/' className={classes.dropdownLink}>
              My Items
            </Link>,
            <Link to='/' className={classes.dropdownLink}>
              Add Items
            </Link>,
            <Link to='/' className={classes.dropdownLink}>
              Items for Collection
            </Link>,
            <Link to='/login' className={classes.dropdownLink}>
              Logout
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
