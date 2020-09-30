/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

// @material-ui/icons
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import EmojiEvent from '@material-ui/icons/EmojiEvents';

// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';

// import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle';
// import styles from 'assets/jss/Items/views/MyItemListings';

// const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: '900',
    alignItems: 'left',
    justify: 'left',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  box: {
    margin: 'auto',
  },
}));

const GetCollectionMsg = (type, time) => {
  const message = type === 'provide'
    ? time !== ''
      ? `Being Collected: ${time}`
      : ''
    : time !== ''
      ? `To Collect: ${time}`
      : '';

  return (
    <Typography variant='body2' color='textPrimary' gutterBottom>
      {message}
    </Typography>
  );
};

export default function MyItemListing({ type, myitem }) {
  const classes = useStyles();

  return (
    <GridContainer spacing={2}>
      <GridItem>
        <Paper className={classes.paper} spacing={2}>
          <GridContainer spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt='complex'
                  src={require('assets/img/purple-banana.jpg')}
                />
              </ButtonBase>
            </Grid>
            <GridContainer align='left' item xs={12} sm container>
              <GridItem xs container direction='column' spacing={2}>
                <GridItem xs={12}>
                  <a href='#'>
                    <Typography gutterBottom variant='body1'>
                      <strong>{myitem.description}</strong>
                    </Typography>
                  </a>
                  <GridContainer align='left' item xs={12} container>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        variant='body2'
                        color='textPrimary'
                        gutterBottom
                      >
                        Category:

                        {myitem.category}
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        variant='body2'
                        color='textPrimary'
                        gutterBottom
                      >
                        Location:

                        {myitem.location}
                      </Typography>
                    </GridItem>
                  </GridContainer>
                  <GridContainer align='left' item xs={12} container>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        variant='body2'
                        color='textPrimary'
                        gutterBottom
                      >
                        <strong>
                          Expires:
                          {myitem.expiryDate}
                        </strong>
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      {GetCollectionMsg(type, myitem.preferredCollectTime)}
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridItem>
              <GridItem align='right'>
                <Button>
                  <EmojiEvent />
                </Button>
                {type === 'provide' && (
                  <Button>
                    <Edit />
                  </Button>
                )}
                <Button>
                  <Delete />
                </Button>
              </GridItem>
            </GridContainer>
          </GridContainer>
        </Paper>
      </GridItem>
    </GridContainer>
  );
}
