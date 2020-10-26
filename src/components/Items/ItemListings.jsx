import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import itemListings from 'assets/jss/Items/views/ItemListings';
import Card from 'components/MaterialKitComponents/Card/Card';
import CardBody from 'components/MaterialKitComponents/Card/CardBody';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import Select from '@material-ui/core/Select';
import Paginations from 'components/MaterialKitComponents/Pagination/Pagination';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Info from 'components/MaterialKitComponents/Typography/Info';

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from 'assets/jss/material-kit-react';
import Slider from 'nouislider';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const styles = {
  ...itemListings,
  cardTitle,
  cardLink,
  cardSubtitle,
  textLeft: {
    textAlign: 'left'
  }
};

const useStyles = makeStyles(styles);
const type = 'search';

function ItemListings({
  searchItems,
  search,
  filters,
  loading,
  user, // current logged in user
  categoryOptions
}) {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState(filters.sortBy);
  const [distance, setDistance] = useState(filters.distance);
  const [unit, setUnit] = useState(filters.unit);
  const [category, setCategory] = useState(filters.category);
  const [expiry, setExpiry] = useState(filters.expiry);
  const [page, setPage] = useState(filters.page);
  const [pagination, setPagination] = useState([]);
  const conversion = {
    miles: 0.00062137,
    kilometres: 1000
  };

  // createPaginations();
  const handleGetItems = async (event, sorting, pageNumber) => {
    if (typeof sorting === 'undefined') { sorting = sortBy; }
    if (typeof pageNumber === 'undefined') { pageNumber = sortBy; }
    searchItems({
      unit,
      distance,
      long: filters.long,
      lat: filters.lat,
      sortBy: (typeof sorting === 'undefined') ? sortBy : sorting,
      category,
      expiry,
      limit: filters.limit,
      page: pageNumber
    });
  };

  const onCategoryChange = (event, values) => {
    setCategory(values);
  };

  const onPageChangeHandler = (event, value) => {
    setPage(value);
    handleGetItems(event, sortBy, value);
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === 'sortBy') {
      setSortBy(value);
      handleGetItems(event, value);
    } else if (name === 'unit') {
      // console.log(value);
      setUnit(value);
      document.getElementById('sliderRegular').noUiSlider.updateOptions({
        start: `${distance}`,
        format: {
          from: Number,
          to: val => `${val.toFixed(2)} ${value === 'Miles' ? 'mi' : 'km'}`
        }
      });
    } else if (name === 'category') {
      setCategory(value);
    }
  };

  const createSlider = () => {
    const distanceSlider = document.getElementById('sliderRegular');
    // create distance Slider when component mounts
    Slider.create(distanceSlider, {
      start: `${filters.distance}`,
      format: {
        from: Number,
        to: value => `${value.toFixed(2)} ${filters.unit === 'Miles' ? 'mi' : 'km'}`
      },
      keyboardSupport: true,
      connect: [true, false],
      range: {
        min: 0,
        max: 10
      },
      tooltips: true,
      pips: {
        mode: 'steps',
        stepped: true,
        density: 10
      }
    });
    setDistance(filters.distance);
    // set the Distance State when slider value changed
    distanceSlider.noUiSlider.on('change', () => setDistance(distanceSlider.noUiSlider.get().replace(/[^\d.-]/g, '')));
  };

  const onDateChangeHandler = date => {
    setExpiry(date);
  };

  useEffect(() => {
    if (!user.loading) {
      createSlider();
      if (!search.paginatedResults.length) {
        searchItems({
          unit: filters.unit,
          distance: filters.distance,
          long: filters.long,
          lat: filters.lat,
          sortBy,
          category,
          expiry,
          limit: filters.limit,
          page: filters.page
        });
      }
    }
  }, [user.loading]);

  useEffect(() => {
    const pages = [{ text: 'PREV' }];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < search.totalCount / filters.limit; i++) {
      pages.push({ active: page === i, text: i, onClick: event => onPageChangeHandler(event, i) });
    }
    pages.push({ text: 'NEXT' });
    setPagination(pages);
  }, [search, filters.limit, page]);

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={3} container spacing={1}>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.filterTitle}>Filters</h4>
                <InputLabel className={classes.filterLabel}>Unit</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={filters.unit}
                    onChange={event => onChangeHandler(event)}
                    name="unit"
                  >
                    <option value="Miles">In Miles</option>
                    <option value="Kilometers">In Kilometers</option>
                  </Select>
                </FormControl>
                <InputLabel className={classes.filterLabel}>
                  Max Distance
                </InputLabel>
                <FormControl fullWidth>
                  <div
                    id="sliderRegular"
                    className={classes.slider}
                    name="slider"
                    onChange={event => onChangeHandler(event)}
                  />
                </FormControl>
                <FormControl fullWidth required className={classes.formControl}>
                  <Autocomplete
                    className={classes.filterLabel}
                    multiple
                    id="checkboxes"
                    options={categoryOptions}
                    disableCloseOnSelect
                    onChange={(event, values) => onCategoryChange(event, values)}
                    value={category}
                    getOptionLabel={option => option.title}
                    getOptionSelected={(option, value) => option.title === value.title}
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
                        placeholder="filter categories"
                      />
                    )}
                  />
                </FormControl>
                <InputLabel className={classes.filterLabel}>
                  Earliest Expiry Date
                </InputLabel>
                <FormControl fullWidth>
                  <Datetime
                    className={classes.bottomFilter}
                    name="expiry"
                    timeFormat={false}
                    dateFormat="DD/MM/yyyy"
                    value={moment(expiry).format('DD/MM/yyyy')}
                    onChange={onDateChangeHandler}
                    closeOnSelect
                    inputProps={{
                      placeholder: 'Select Expiry date..',
                      required: true,
                      onKeyDown: e => e.preventDefault()
                    }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Button
                    fullWidth
                    size="md"
                    color="rose"
                    onClick={handleGetItems}
                  >
                    Apply Filters
                  </Button>
                </FormControl>
              </GridItem>
            </GridItem>
            <GridItem
              xs={12}
              sm={8}
              md={9}
              container
              direction="row"
              spacing={1}
            >
              <GridItem xs={12} sm={6} md={8}>
                <h5>
                  <small>
                    <b>{search.totalCount} ITEMS FOUND</b>, within <b>{filters.distance}</b> {filters.unit} of <b>{user.postcode}</b>
                  </small>
                </h5>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={sortBy}
                    onChange={event => onChangeHandler(event)}
                    name="sortBy"
                  >
                    <option value="distance">Sort by: Nearest first</option>
                    <option value="expiry">Sort by: Expiry</option>
                    <option value="date">Sort by: Newest first</option>
                  </Select>
                </FormControl>
              </GridItem>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {/* Only retrieve items not belonging to the user and not already being collected by someone else */}
                  {search.paginatedResults.map(item => (
                    <GridItem
                      xs={12}
                      sm={6}
                      md={4}
                      key={item._id}
                      className={classes.card}
                    >
                      <Card className={classes.textLeft}>
                        <CardBody>
                          <h5 className={classes.cardTitle}>{item.title}</h5>
                          <Typography variant="body2">
                            {`Expires: ${moment(item.expiry).format('Do MMM YY')}`}
                          </Typography>
                          <p>{item.description}</p>
                          <GridContainer>
                            <GridItem xs={6}>
                              <Link
                                to={`/itemview/${item._id}/${type}`}
                                className={classes.link}
                              >
                                View Item
                              </Link>
                            </GridItem>
                            <GridItem xs={6}>
                              <Info>
                                {`${filters.unit === 'Miles'
                                  ? (item.distance * conversion.miles).toFixed(1) : (item.distance / conversion.kilometres).toFixed(1)}`}
                                {`${filters.unit === 'Miles' ? ' miles' : ' km'}`}
                              </Info>
                            </GridItem>
                          </GridContainer>
                        </CardBody>
                      </Card>
                    </GridItem>
                  ))}
                </>
              )}
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              container
              spacing={1}
              direction="row-reverse"
            >
              <Paginations
                pages={pagination}
                color="rose"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

ItemListings.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  searchItems: PropTypes.instanceOf(Object).isRequired,
  search: PropTypes.instanceOf(Object),
  filters: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  categoryOptions: PropTypes.instanceOf(Array).isRequired
};

export default ItemListings;
