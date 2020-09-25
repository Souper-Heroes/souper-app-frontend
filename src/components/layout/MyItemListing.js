import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
//import Chat from '@material-ui/icons/Chat';
//import VerifiedUser from '@material-ui/icons/VerifiedUser';
//import Fingerprint from '@material-ui/icons/Fingerprint';
//import Face from '@material-ui/icons/Face';
//import Build from '@material-ui/icons/Build';
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

//const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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
}));

export default function MyItemListing() {
  const classes = useStyles();

  return (
    /* <div /* {className={classes.section} } >
      <GridContainer justify='center'>
        <GridItem xs={3} sm={3} md={6}>
          <a href='#'>
            <img className={classes.image} src={banana} alt='Thumbnail Image' />
          </a>
        </GridItem>
      </GridContainer>
    </div> */
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/*<Grid container spacing={2}> */}
        <GridContainer spacing={2}>
          {/* <Grid item> */}
          <GridItem>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt='complex'
                src={require('assets/img/purple-banana.jpg')}
              />
            </ButtonBase>
          </GridItem>
          {/* </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Standard license
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>$19.00</Typography>
            </Grid>
          </Grid>
        </GridContainer>
        {/*</Grid> */}
      </Paper>
    </div>
  );
}
