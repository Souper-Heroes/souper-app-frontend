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

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const history = useHistory();
  const logout = async () => {
    await props.logout();
    history.push('/login');
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Account"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Face}
          dropdownList={[
            <Link to="/profile" className={classes.dropdownLink}>
              My Account
            </Link>,
            <Link to="/dashboard" className={classes.dropdownLink}>
              Dashboard
            </Link>,
            <Link to="/itemlist" className={classes.dropdownLink}>
              My Items
            </Link>,
            <Link to="/addEditItem" className={classes.dropdownLink}>
              Add Items
            </Link>,
            <a onClick={logout} className={classes.dropdownLink}>
              Logout
            </a>,
          ]}
        />
      </ListItem>
    </List>
  );
}
