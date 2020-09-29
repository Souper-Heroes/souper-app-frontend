import React, { useState } from 'react';
import Datetime from "react-datetime";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import Card from 'components/MaterialKitComponents/Card/Card.js';
import CardBody from 'components/MaterialKitComponents/Card/CardBody.js';
import CustomInput from "components/MaterialKitComponents/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Button from 'components/MaterialKitComponents/CustomButtons/Button.js';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(styles);

function Page() {
  const classes = useStyles();
  const [unit, setUnit] = useState('miles');

  const handleChange = (event) => {
    setUnit(event.target.value);
  };
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
                <InputLabel className={classes.filterLabel}>
                  Expiry Date
                </InputLabel>
                <FormControl fullWidth>
                  <Datetime
                    inputProps={{ placeholder: "Select Expiry date.." }}
                  />
                </FormControl>
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

          </GridContainer>

          <div className={classes.description}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.{' '}
            </p>
          </div>
          <GridContainer justify='center'>
            <GridItem
              xs={12}
              sm={12}
              md={8}
              className={classes.navWrapper}
            ></GridItem>
          </GridContainer>
        </div>
      </div>
    </div >
  );
}

export default Page;
