/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
//import Chat from '@material-ui/icons/Chat';
//import VerifiedUser from '@material-ui/icons/VerifiedUser';
//import Fingerprint from '@material-ui/icons/Fingerprint';
//import Face from '@material-ui/icons/Face';
//import Build from '@material-ui/icons/Build';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import EmojiEvent from '@material-ui/icons/EmojiEvents';

// core components
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import Grid from '@material-ui/core/Grid';
//import InfoArea from 'components/MaterialKitComponents/InfoArea/InfoArea.js';
//import CustomTabs from 'components/MaterialKitComponents/CustomTabs/CustomTabs.js';
//import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
import styles from 'assets/jss/Items/views/MyItemListings.js';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import banana from 'assets/img/purple-banana.jpg';
import { Button } from '@material-ui/core';
import { Markunread } from '@material-ui/icons';

//const useStyles = makeStyles(styles);

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

export default function MyItemListing() {
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
                      <strong>
                        5 Almost black over-ripe bananas sdfsdfsd sdfsdfsdf
                        sdfsdsdfsdfsdfs sdfsdf sdfs sdfsfd sdfsf sdfsfsd
                        sfdsdfsf
                      </strong>
                    </Typography>
                  </a>
                  <GridContainer align='left' item xs={12} container>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        variant='body2'
                        color='textPrimary'
                        gutterBottom
                      >
                        Category: Fruit
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        variant='body2'
                        color='textPrimary'
                        gutterBottom
                      >
                        Location: EN4 4QE
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
                        <strong>Expires: 23rd Sept 2020</strong>
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        variant='body2'
                        color='textPrimary'
                        gutterBottom
                      >
                        Collected: 23rd Sept 2020
                      </Typography>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridItem>
              <GridItem align='right'>
                <Button>
                  <EmojiEvent />
                </Button>
                <Button>
                  <Edit />
                </Button>
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
