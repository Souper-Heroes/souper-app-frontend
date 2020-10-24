import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import profile from 'assets/jss/material-kit-react/views/profilePage';
import Card from 'components/MaterialKitComponents/Card/Card';
import CardBody from 'components/MaterialKitComponents/Card/CardBody';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from 'components/MaterialKitComponents/CustomButtons/Button';
import Select from '@material-ui/core/Select';
import Paginations from 'components/MaterialKitComponents/Pagination/Pagination';

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from 'assets/jss/material-kit-react';
import Slider from 'nouislider';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';

const styles = {
  ...profile,
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
  // searchCount,
  filters,
  loading,
  user // current logged in user
}) {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState(-1);
  const [distance, setDistance] = useState(filters.distance);
  const [unit, setUnit] = useState(filters.unit);
  const [category, setCategory] = useState('');
  const [expiry, setExpiry] = useState(filters.expiry);

  const handleGetItems = async () => {
    searchItems({
      unit,
      distance,
      long: user.location.coordinates[0],
      lat: user.location.coordinates[1],
      sortBy,
      category,
      expiry
    });
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    // console.log(name, value)
    if (name === 'sortBy') {
      setSortBy(value);
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

  const onDateChangeHandler = date => {
    setExpiry(date);
  };

  useEffect(() => {
    const distanceSlider = document.getElementById('sliderRegular');
    const distanceVal = 2;
    const unitVal = 'Miles';
    // create distance Slider when component mounts
    Slider.create(distanceSlider, {
      start: `${distanceVal}`,
      format: {
        from: Number,
        to: value => `${value.toFixed(2)} ${unitVal === 'Miles' ? 'mi' : 'km'}`
      },
      keyboardSupport: true,
      connect: [true, false],
      range: {
        min: 0,
        max: 5
      },
      tooltips: true,
      pips: {
        mode: 'steps',
        stepped: true,
        density: 10
      }
    });
    // set the Distance State when slider value changed
    distanceSlider.noUiSlider.on('change', () => setDistance(distanceSlider.noUiSlider.get().replace(/[^\d.-]/g, '')));
  }, []);

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
                    value={unit}
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
                    className="slider-primary"
                    id="sliderRegular"
                    // className={classes.slider}
                    name="slider"
                    onChange={event => onChangeHandler(event)}
                  />
                </FormControl>
                <InputLabel className={classes.filterLabel}>
                  Category
                </InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={category}
                    onChange={event => onChangeHandler(event)}
                    name="category"
                  >
                    <option aria-label="None" value="" />
                    <option value="Fruit">Fruit</option>
                    <option value="Tinned">Tinned</option>
                    <option value="Veg">Veg</option>
                  </Select>
                </FormControl>
                <InputLabel className={classes.filterLabel}>
                  Expiry Date
                </InputLabel>
                <FormControl fullWidth>
                  <Datetime
                    className={classes.bottomFilter}
                    inputProps={{ placeholder: 'Select Expiry date..' }}
                    name="expiry"
                    value={expiry}
                    onChange={onDateChangeHandler}
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
                <h6>{search.length} ITEMS FOUND</h6>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={sortBy}
                    onChange={event => onChangeHandler(event)}
                    name="sortBy"
                  >
                    <option aria-label="None" value="" />
                    <option value="1">Sort by: Nearest first</option>
                    <option value="-1">Sort by: Nearest last</option>
                  </Select>
                </FormControl>
              </GridItem>
              {loading ? (<Spinner />) : (
                <>
                  {/* Only retrieve items not belonging to the user and not already being collected by someone else */}
                  {search.map(item => (
                    <GridItem xs={12} sm={6} md={4} key={item._id}>
                      <Card className={classes.textLeft}>
                        <CardBody>
                          <h5 className={classes.cardTitle}>{item.title}</h5>
                          <strong>
                            <h6 className={classes.cardSubtitle}>
                              {`Expires: ${moment(item.expiry).format('DD/MM/YYYY')}`}
                            </h6>
                          </strong>
                          <p>{item.description} dist: {item.distance}</p>
                          <Link
                            to={`/itemview/${item._id}/${type}`}
                            className={classes.link}
                          >
                            <Typography>
                              View Item
                            </Typography>
                          </Link>
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
                pages={[
                  { text: 'PREV' },
                  { active: true, text: 1 },
                  { text: 2 },
                  { text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: 'NEXT' }
                ]}
                color="primary"
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
  search: PropTypes.instanceOf(Array),
  // searchCount: PropTypes.number.isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default ItemListings;
