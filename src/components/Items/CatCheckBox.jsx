import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import Autocomplete from '@material-ui/lab/Autocomplete';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const categories = [
  { title: 'Nuts' },
  { title: 'Fruit' },
  { title: 'Dairy' },
  { title: 'Fish' },
  { title: 'Meat' },
  { title: 'Cereal' },
  { title: 'Fresh' },
  { title: 'Cooked' },
  { title: 'Raw' },
  { title: 'Frozen' },
  { title: 'Dried' },
  { title: 'Tinned' },
  { title: 'Packet' },
];

export default function CatCheckBox({ category }) {
  const [checked, setChecked] = useState();

  const onTagsChange = (event, values) => {
    category = values;
    setChecked(values);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="checkboxes"
        options={categories}
        disableCloseOnSelect
        onChange={onTagsChange}
        getOptionLabel={option => option.title}
        renderOption={(option, { selected }) => (
          <>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              // onChange={e => handleCategoryToggle(option, selected)}
            />
            {option.title}
          </>
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
