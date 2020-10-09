import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import Autocomplete from '@material-ui/lab/Autocomplete';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const categories = [
  { title: 'Nuts', checked: null },
  { title: 'Fruit', checked: null },
  { title: 'Dairy', checked: null },
  { title: 'Fish', checked: null },
  { title: 'Meat', checked: null },
  { title: 'Cereal', checked: null },
  { title: 'Fresh', checked: null },
  { title: 'Cooked', checked: null },
  { title: 'Raw', checked: null },
  { title: 'Frozen', checked: null },
  { title: 'Dried', checked: null },
  { title: 'Tinned', checked: null },
  { title: 'Packet', checked: null },
];

export default function CatCheckBox(props) {
  const [zchecked, zsetChecked] = useState();
  const handleCategoryToggle = (option, selected) => {
    if (selected) {
      option.checked = false;
    } else {
      option.checked = true;
    }
    console.log(option.title, option.checked);
    zsetChecked(option.checked);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="checkboxes"
        options={categories}
        disableCloseOnSelect
        getOptionLabel={option => option.title}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              onChange={e => handleCategoryToggle(option, selected)}
            />
            {option.title}
          </React.Fragment>
        )}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Category"
            placeholder="Choose all that apply"
          />
        )}
      />
    </div>
  );
}
