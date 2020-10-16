import React, { useState } from 'react';

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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import styles from 'assets/jss/material-kit-react/views/profilePage';
import PropTypes from 'prop-types';

// DropZone imports
import DropZone from '../dropzone/DropZone';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const categoryOptions = [
  { title: 'Nuts'   },
  { title: 'Fruit'  },
  { title: 'Dairy'  },
  { title: 'Fish'   },
  { title: 'Meat'   },
  { title: 'Cereal' },
  { title: 'Fresh'  },
  { title: 'Cooked' },
  { title: 'Raw'    },
  { title: 'Frozen' },
  { title: 'Dried'  },
  { title: 'Tinned' },
  { title: 'Packet' },
];

const useStyles = makeStyles(styles);

export default function AddEditItem({ addItem }) {
  const classes = useStyles();

  // const [location, setLocation] = useState({});
  const [availability, setAvailability] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expiry, setExpiry] = useState('');
  const [category, setCategory] = useState([]);

  const handleTitleChange = e => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };

  const onTagsChange = (event, values) => {
    setCategory(values);
  }; 

  const handleExpiryChange = value => {
    const newDate = value._d.toLocaleDateString('en-GB');
    // console.log(newDate);
    setExpiry(newDate);
  };

  const handleAvailChange = e => {
    // console.log(e.target.value);
    setAvailability(e.target.value);
  };

  const onSubmit = async event => {  
    const addedItem = await addItem({
      title,
      description,
      category: category.map((cat) => cat.title), 
      expiry, // TODO - BUG! crashes when typed into!!
      location: {
        type: "Point",
        coordinates: [-112.110492, 36.098948]
      },
      availability
    })
  // reset form
      if (addedItem) {
        setTitle('');
        setDescription('');
        setCategory([]);
        // setLocation({});  
        setExpiry('');  
        setAvailability('');
      }
  };

  const onCancel = ()=>{
    window.history.back();
  }

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <DropZone />
            </GridItem>
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <CustomInput
                labelText="Title"
                inputProps={{
                  placeholder: 'Give your item a name',
                  onChange: event => handleTitleChange(event),
                  value: title
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Description"
                inputProps={{
                  placeholder:
                    'Describe your item, has it been opened or dropped?',
                  onChange: event => handleDescriptionChange(event),
                  value: description
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <Autocomplete
                multiple
                id="checkboxes"
                options={categoryOptions}
                disableCloseOnSelect
                onChange={onTagsChange} 
                value={category}
                getOptionLabel={option => option.title}
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
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} className={classes.navWrapper}>
              <InputLabel style={{ float: 'left' }} className={classes.label}>
                Expiry date
              </InputLabel>
              <FormControl fullWidth>
                <Datetime
                  className={classes.bottomFilter}
                  name="expiry"
                  timeFormat={false}
                  inputProps={{
                    placeholder: 'Enter the date the item will expire',
                    value: expiry
                  }}
                  onChange={handleExpiryChange}
                />
              </FormControl>
              <CustomInput
                labelText="Location"
                name="location"
                id="disabled"
                inputProps={{
                  disabled: true,
                  value: `DT9 4LY`
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              /> 
            </GridItem>
            <GridItem xs={12} sm={6} container spacing={1} direction="row">
              <GridItem xs={12}>
                <CustomInput
                  labelText="Available collection times"
                  inputProps={{
                    placeholder:
                      'e.g. Weekdays between 9 and 5pm, and all day Sunday',
                    onChange: event => handleAvailChange(event),
                    value: availability
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem fullWidth align="right">
                <Button color="danger" size="lg" onClick={onCancel}>
                  Cancel
                </Button>
                <Button
                  color="success"
                  size="lg"
                  onClick={event => onSubmit(event)}
                >
                  Save
                </Button>
              </GridItem>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

AddEditItem.propTypes = {
  userItems: PropTypes.instanceOf(Array)
};
