import React, { useState, useEffect } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

// Material Kit components
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import CustomInput from 'components/MaterialKitComponents/CustomInput/CustomInput';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// Date time imports
import Datetime from 'react-datetime';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import styles from 'assets/jss/material-kit-react/views/profilePage';
import PropTypes from 'prop-types';

// DropZone imports
import DropZone from '../dropzone/DropZone';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const categoryOptions = [
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
  { title: 'Packet' }
];

const useStyles = makeStyles(styles);

export default function AddEditItem({ addItem, updateItem, item, postcode, location }) {
  const formatExpiry = expiry => moment(expiry).format('DD/MM/yyyy');

  const formatCategory = catArr => {
    const obj = { title: '' };
    const objArr = [];
    catArr.forEach(cat => {
      const itemObj = Object.create(obj);
      itemObj.title = cat;
      objArr.push(itemObj);
    });
    return objArr;
  };

  const [availability, setAvailability] = useState(
    item ? item.availability : ''
  );
  const [title, setTitle] = useState(item ? item.title : '');
  const [description, setDescription] = useState(item ? item.description : '');
  const [expiry, setExpiry] = useState(item ? formatExpiry(item.expiry) : '');
  const [category, setCategory] = useState(
    item ? formatCategory(item.category) : []
  );

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory([]);
    setExpiry('');
    setAvailability('');
  };

  useEffect(() => {
    if (!item) {
      resetForm();
    }
  }, [item]);

  const classes = useStyles();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onCategoryChange = (event, values) => {
    setCategory(values);
  };

  const handleExpiryChange = value => {
    setExpiry(moment(value._d));
  };

  // Prevent the user from entering dates in the past.
  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const handleAvailChange = e => {
    setAvailability(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (item) {
      await updateItem(
        {
          title,
          description,
          category: category.map(cat => cat.title),
          expiry,
          postcode,
          location,
          availability,
        },
        item._id
      );
    } else {
      const addedItem = await addItem({
        title,
        description,
        category: category.map(cat => cat.title),
        expiry,
        postcode, // TODO - get this info from Profile
        location,
        availability
      });
      // reset form
      if (addedItem) {
        resetForm();
      }
    }
  };

  const onCancel = () => {
    window.history.back();
  };

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <form onSubmit={onSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={4} className={classes.navWrapper}>
                <DropZone />
              </GridItem>
              <GridItem xs={12} sm={6} md={8} className={classes.navWrapper}>
                <CustomInput
                  labelText="Title"
                  inputProps={{
                    required: true,
                    placeholder: 'Give your item a name',
                    onChange: event => handleTitleChange(event),
                    value: title
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  labelText="Description"
                  inputProps={{
                    required: true,
                    placeholder:
                      'Describe your item, has it been opened or dropped?',
                    onChange: event => handleDescriptionChange(event),
                    value: description
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <Autocomplete
                  multiple
                  id="checkboxes"
                  options={categoryOptions}
                  disableCloseOnSelect
                  onChange={onCategoryChange}
                  value={category}
                  getOptionLabel={option => option.title}
                  getOptionSelected={(option, value) =>
                    option.title === value.title
                  }
                  renderOption={(option, { selected }) => (
                    <>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
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
                <br />
                <InputLabel style={{ float: 'left' }} className={classes.label}>
                  Expiry date
                </InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    name="expiry"
                    timeFormat={false}
                    dateFormat="DD/MM/yyyy"
                    value={expiry}
                    isValidDate={valid}
                    onChange={handleExpiryChange}
                    closeOnSelect
                    inputProps={
                      { readOnly: true }
                    }
                  />
                </FormControl>
                <CustomInput
                  labelText="Available collection times"
                  inputProps={{
                    required: true,
                    placeholder:
                      'e.g. Weekdays between 9 and 5pm, and all day Sunday',
                    onChange: event => handleAvailChange(event),
                    value: availability
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <CustomInput
                  labelText="Postcode"
                  name="postcode"
                  id="disabled"
                  inputProps={{
                    disabled: true,
                    value: postcode.toUpperCase()
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                container
                spacing={1}
                direction="row-reverse"
              >
                <GridItem xs={12} sm={6} md={2}>
                  <Button type="submit" fullWidth color="success" size="md">
                    Save
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <Button fullWidth color="danger" size="md" onClick={onCancel}>
                    Cancel
                  </Button>
                </GridItem>
              </GridItem>
            </GridContainer>
          </form>
        </div>
      </div>
    </div>
  );
}

AddEditItem.propTypes = {
  addItem: PropTypes.func,
  updateItem: PropTypes.func,
  item: PropTypes.instanceOf(Object),
  postcode: PropTypes.string,
  location: PropTypes.instanceOf(Object)
};
