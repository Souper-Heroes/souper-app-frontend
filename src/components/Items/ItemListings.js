import React, { useState } from 'react';
import Datetime from "react-datetime";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import Card from 'components/MaterialKitComponents/Card/Card.js';
import CardBody from 'components/MaterialKitComponents/Card/CardBody.js';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from 'components/MaterialKitComponents/CustomButtons/Button.js';
import Select from '@material-ui/core/Select';
import Paginations from "components/MaterialKitComponents/Pagination/Pagination.js";
import Slider from "nouislider";

const useStyles = makeStyles(styles);

function Page() {
  const classes = useStyles();
  const [unit, setUnit] = useState('miles');

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  React.useEffect(() => {
    Slider.create(document.getElementById("sliderRegular"), {
      start: 2,
      keyboardSupport: true,
      connect: [true, false],
      range: {
        min: 0,
        max: 5,
      },
      tooltips: true,
      format: {
        from: Number,
        to: function (value) {
          return value.toFixed(2) + ' Miles';
        },
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 10,
      },
    });
  });
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} container spacing={1} direction="row-reverse">
              <GridItem xs={12} sm={4} md={3} >
                <InputLabel className={classes.filterLabel}>Sort By</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={unit}
                    onChange={handleChange}
                    name="age"
                  >
                    <option aria-label="None" value="" />
                    <option value={'miles'}>In Miles</option>
                    <option value={'kilometers'}>In Kilometers</option>
                  </Select>

                </FormControl>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={4} md={3} container spacing={1}>
              <GridItem xs={12} sm={12} md={12} >
                <h4 className={classes.filterTitle}>Filters</h4>
                <InputLabel className={classes.filterLabel}>Distance</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>

                  <Select
                    native
                    value={unit}
                    onChange={handleChange}
                    name="age"
                  >
                    <option aria-label="None" value="" />
                    <option value={'miles'}>In Miles</option>
                    <option value={'kilometers'}>In Kilometers</option>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <div className="slider-primary" id="sliderRegular" className={classes.slider} />
                </FormControl>
                <InputLabel className={classes.filterLabel}>Category</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={unit}
                    onChange={handleChange}
                    name="age"
                  >
                    <option aria-label="None" value="" />
                    <option value={0}>In Miles</option>
                    <option value={1}>In Kilometers</option>
                    <option value={3}>In Kilometers</option>
                  </Select>
                </FormControl>
                <InputLabel className={classes.filterLabel}>
                  Expiry Date
                </InputLabel>
                <FormControl fullWidth>
                  <Datetime className={classes.bottomFilter}
                    inputProps={{ placeholder: "Select Expiry date.." }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Button fullWidth size='md' color='rose'>
                    Apply Filters
                    </Button>
                </FormControl>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={8} md={9} container direction="row" spacing={1}>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} container spacing={1} direction="row-reverse">

              <Paginations
                pages={[
                  { text: "PREV" },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: "NEXT" }
                ]}
                color="rose"
              />


            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div >
  );
}

export default Page;
