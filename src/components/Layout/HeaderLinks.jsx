/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link, useHistory } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import { Face } from '@material-ui/icons';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle';
import * as ROUTES from 'components/Routing/routes';

const useStyles = makeStyles(styles);

export default function HeaderLinks({logout, user}) {
  const classes = useStyles();
  const logmeout = async () => {
    logout();
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={`${user.display_name}`}
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Face}
          dropdownList={[
            <Link to={ROUTES.PROFILE} className={classes.dropdownLink}>
              My Account
            </Link>,
            <Link to={ROUTES.DASHBOARD} className={classes.dropdownLink}>
              Dashboard
            </Link>,
            <Link to={ROUTES.ITEM_LIST} className={classes.dropdownLink}>
              My Items
            </Link>,
            <Link to={ROUTES.ADD_EDIT_ITEM} className={classes.dropdownLink}>
              Add Items
            </Link>,
            <a onClick={logmeout} className={classes.dropdownLink}>
              Logout
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
}
