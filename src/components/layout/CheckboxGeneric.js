import React from 'components/Layout/node_modules/react';
import classNames from 'components/Layout/node_modules/classnames';
// material-ui components
import { makeStyles } from 'components/Layout/node_modules/@material-ui/core/styles';
import Checkbox from 'components/Layout/node_modules/@material-ui/core/Checkbox';
import FormControlLabel from 'components/Layout/node_modules/@material-ui/core/FormControlLabel';
// @material-ui/icons
import Check from 'components/Layout/node_modules/@material-ui/icons/Check';

import styles from 'components/Layout/node_modules/assets/jss/material-kit-react/customCheckboxRadioSwitch.js.js';

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
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{ checked: classes.checked }}
            />
          }
          classes={{ label: classes.label }}
          label={props.children}
        />
      </div>
    </div>
  );
}
