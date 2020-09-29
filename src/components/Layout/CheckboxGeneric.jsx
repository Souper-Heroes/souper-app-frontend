import React from 'react';
import classNames from 'classnames';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Check from '@material-ui/icons/Check';

import styles from 'assets/jss/material-kit-react/customCheckboxRadioSwitch';

const useStyles = makeStyles(styles);

export default function CheckboxGeneric(props) {
  const [checked, setChecked] = React.useState([24, 22]);
  const classes = useStyles();

  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div>
      <div className={wrapperDiv}>
        <FormControlLabel
          control={(
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{ checked: classes.checked }}
            />
          )}
          classes={{ label: classes.label }}
          label={props.children}
        />
      </div>
    </div>
  );
}
