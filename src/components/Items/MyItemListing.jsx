import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/Items/views/MyItemListing';
import { Link } from 'react-router-dom';
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

const useStyles = makeStyles(styles);

const GetCollectionMsg = (type) => {
  let message = null;
  if (type === 'provide') {
    message = 'Being Collected:';
  } else {
    message = 'To Collect:';
  }

  return (
    <Typography variant='body2' color='textSecondary' gutterBottom>
      {message}
    </Typography>
  );
};

export default function MyItemListing({ type, myitem }) {
  const classes = useStyles();

  return (
    <GridContainer spacing={1}>
      <GridItem>
        <Paper className={classes.paper} spacing={1}>
          <GridContainer spacing={1}>
            <Grid item>
              <Link to='/itemview' className={classes.link}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt='complex'
                    src={require('assets/img/purple-banana.jpg')}
                  />
                </ButtonBase>
              </Link>
            </Grid>
            <GridContainer xs={12} sm item spacing={0} direction='column'>
              <GridItem align='left' xs={12} className={classes.cell}>
                <Link to='/itemview' className={classes.link}>
                  <Typography gutterBottom variant='body1'>
                    <strong>{myitem.description}</strong>
                  </Typography>
                </Link>
                <GridContainer className={classes.container}>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.cell}
                  >
                    <GridContainer
                      direction='row'
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        sm={5}
                        lg={5}
                        className={classes.cell}
                      >
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          gutterBottom
                        >
                          Category:
                        </Typography>
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        sm={7}
                        lg={7}
                        align='left'
                        className={classes.cell}
                      >
                        <Typography
                          variant='body2'
                          color='textPrimary'
                          gutterBottom
                          align='left'
                        >
                          {myitem.category}
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.cell}
                  >
                    <GridContainer
                      direction='row'
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        sm={5}
                        lg={5}
                        className={classes.cell}
                      >
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          gutterBottom
                        >
                          Location:
                        </Typography>
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        sm={7}
                        lg={7}
                        align='left'
                        className={classes.cell}
                      >
                        <Typography
                          variant='body2'
                          color='textPrimary'
                          gutterBottom
                          align='left'
                        >
                          {myitem.location}
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.container}>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.cell}
                  >
                    <GridContainer
                      direction='row'
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        sm={5}
                        lg={5}
                        className={classes.cell}
                      >
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          gutterBottom
                        >
                          Expires:
                        </Typography>
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        sm={7}
                        lg={7}
                        align='left'
                        className={classes.cell}
                      >
                        <Typography
                          variant='body2'
                          color='textPrimary'
                          gutterBottom
                          align='left'
                        >
                          {myitem.expiryDate}
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.cell}
                  >
                    <GridContainer
                      direction='row'
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        sm={5}
                        lg={5}
                        className={classes.cell}
                      >
                        {myitem.preferredCollectStartTime !== null &&
                          GetCollectionMsg(type)}
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        sm={7}
                        lg={7}
                        align='left'
                        className={classes.cell}
                      >
                        {myitem.preferredCollectStartTime !== null && (
                          <Typography
                            variant='body2'
                            color='textPrimary'
                            gutterBottom
                            align='left'
                          >
                            {myitem.preferredCollectStartTime}
                          </Typography>
                        )}
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={12} align='right'>
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
