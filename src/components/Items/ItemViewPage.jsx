import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import styles from 'assets/jss/Items/views/ItemViewPage';

const useStyles = makeStyles(styles);

export default function ItemViewPage({ item }) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify='center'>
          <GridItem className={classes.border}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <img
                className={classes.img}
                alt='item of food'
                src={require('assets/img/purple-banana.jpg')}
                justify='center'
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Typography
                align='center'
                variant='body1'
                color='error'
                gutterBottom
              >
                Expires soon!
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
                    className={classes.label}
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
                    className={classes.output}
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
                    className={classes.label}
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
                    className={classes.output}
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
                    className={classes.label}
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
                    className={classes.output}
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
              <GridItem xs={6} sm={6} md={6} lg={6} />
            </GridContainer>
            <GridContainer align='center'>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align='left' spacing={0} direction='column'>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
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
                    className={classes.output}
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
                    className={classes.label}
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
                    className={classes.output}
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
            <GridItem align='center' container>
              <GridItem align='center' xs={12} sm={6}>
                <Button className={classes.button_label} color='rose' size='sm'>
                  Amend Time
                </Button>
              </GridItem>
              <GridItem xs={12} sm={6} align='center' container>
                <GridItem xs={6} sm={6} align='right'>
                  <Button
                    className={classes.button_label}
                    color='danger'
                    size='sm'
                  >
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={6} align='left'>
                  <Button
                    className={classes.button_label}
                    color='success'
                    size='sm'
                  >
                    Reserve
                  </Button>
                </GridItem>
              </GridItem>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
