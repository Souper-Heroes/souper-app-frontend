/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
//import clsx from 'clsx';
//import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
//import CustomButton from 'components/CustomButtons/Button.js';
//import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from 'components/CustomButtons/Button.js';

import Typography from '@material-ui/core/Typography';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

const useStyles = makeStyles(styles);

const useCardStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  image: {
    width: 250,
    height: 250,
  },
  img: {
    //margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
    margin: '20px auto 50px auto',
    textAlign: 'center',
  },

  label: { margin: 'auto', padding: '0px' },
  output: { margin: 'auto', padding: '0px' },
  button_label2: { margin: 'auto', padding: '0px' },
  border: { margin: '15px' },
});

function ItemViewCard({ item }) {
  const classes = useStyles();
  const classesCard = useCardStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <GridItem className={classesCard.border}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <img
                className={classesCard.img}
                src={require('assets/img/purple-banana.jpg')}
                justify='center'
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Typography
                align='center'
                variant='h5'
                color='primary'
                gutterBottom
              >
                Message
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Typography variant='body1' gutterBottom>
                <strong>{item.description}</strong>
              </Typography>
            </GridItem>
            <GridContainer align='center'>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align='center' spacing={0} direction='column'>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.label}
                  >
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='left'
                    >
                      Category:
                    </Typography>
                  </GridItem>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.output}
                  >
                    <Typography
                      variant='body2'
                      color='textPrimary'
                      align='left'
                      gutterBottom
                    >
                      {item.category}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align='center' spacing={0} direction='column'>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.label}
                  >
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='left'
                    >
                      Location:
                    </Typography>
                  </GridItem>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.output}
                  >
                    <Typography
                      variant='body2'
                      color='textPrimary'
                      align='left'
                      gutterBottom
                    >
                      {item.location}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <GridContainer align='center'>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align='center' spacing={0} direction='column'>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.label}
                  >
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='left'
                    >
                      Expiry Date:
                    </Typography>
                  </GridItem>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.output}
                  >
                    <Typography
                      variant='body2'
                      color='textPrimary'
                      align='left'
                      gutterBottom
                    >
                      {item.expiryDate}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6}></GridItem>
            </GridContainer>
            <GridContainer align='center'>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align='left' spacing={0} direction='column'>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.label}
                  >
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='left'
                    >
                      Start Time Slot:
                    </Typography>
                  </GridItem>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.output}
                  >
                    <Typography
                      variant='body2'
                      color='textPrimary'
                      align='left'
                      gutterBottom
                    >
                      {item.preferredCollectStartTime}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align='right' spacing={0} direction='column'>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.label}
                  >
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      align='left'
                    >
                      End Time Slot:
                    </Typography>
                  </GridItem>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classesCard.output}
                  >
                    <Typography
                      variant='body2'
                      color='textPrimary'
                      align='left'
                      gutterBottom
                    >
                      {item.preferredCollectStartTime}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <GridContainer align='center'>
              <GridItem xs={6} sm={6} className={classesCard.button_label}>
                <Button color='rose' size='sm'>
                  Amend Time
                </Button>
              </GridItem>
              <GridContainer align='center'>
                <GridItem xs={6} sm={6} className={classesCard.button_label}>
                  <Button color='danger' size='sm'>
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={6} className={classesCard.button_label}>
                  <Button color='success' size='sm'>
                    Reserve
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default ItemViewCard;
