/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Check from '@material-ui/icons/Check';
import styles from 'assets/jss/material-kit-react/customCheckboxRadioSwitch';

const useStyles = makeStyles(styles);

export default function CheckboxTermsAndConds({
  checkTermsAndConds,
  children,
}) {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );
  const handleToggle = () => {
    const newChecked = !checked;

    setChecked(newChecked);
    // Callback function to take care of what happens in the Parent component based on the new value
    checkTermsAndConds(newChecked);
  };

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

CheckboxTermsAndConds.propTypes = {
  checkTermsAndConds: PropTypes.func,
  children: PropTypes.node
};
