import React from 'react';
import classNames from 'classnames';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Check from '@material-ui/icons/Check';

import styles from 'assets/jss/material-kit-react/customCheckboxRadioSwitch';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

export default function CheckboxGeneric({ handleToggle, children }) {
  const classes = useStyles();

  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );

  return (
    <div>
      <div className={wrapperDiv}>
        <FormControlLabel
          control={(
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle()}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{ checked: classes.checked }}
            />
          )}
          classes={{ label: classes.label }}
          label={children}
        />
      </div>
    </div>
  );
}

CheckboxGeneric.propTypes = {
  handleToggle: PropTypes.func,
  children: PropTypes.node,
};
