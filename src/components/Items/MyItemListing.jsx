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

import moment from 'moment';
import PropTypes from 'prop-types';
import banana from 'assets/img/purple-banana.jpg';

const useStyles = makeStyles(styles);

export default function MyItemListing(props) {
  const {
    type,
    myitem,
    deleteItem,
    unreserveItem
  } = props;
  const classes = useStyles();

  const GetCollectionMsg = newType => {
    let message = null;
    if (newType === 'provide') {
      message = 'Being Collected:';
    } else {
      message = 'To Collect:';
    }

    return (
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {message}
      </Typography>
    );
  };

  const handleOnClickDelete = () => {
    /* TODO
    console.log(
      `Clicked Delete button, do something with item: ${item.itemId}, Title: ${item.description}`
    ); */

    if (type === 'provide') {
      deleteItem(myitem._id);
    } else {
      // Unreserve the item
      unreserveItem(myitem._id);
    }
  };

  const handleOnClickAgreeCup = async () => {
    /* TODO
    console.log(
      `Clicked Cup button, do something with item: ${item.itemId}, Title: ${item.description}`
    ); */

    // await getAddress(myitem.postcode);

    // setTimeout(1000);
    // console.log("*** my address: ", address);
    // if (addrstatus == "OK") {
    //  console.log('My Address:', address, 'addrstatus:', addrstatus);
    // }
    // else {
    //  console.log('Address not found, addrstatus:', addrstatus);
    // }
  };

  return (
    <GridContainer spacing={1}>
      <GridItem>
        <Paper className={classes.paper} spacing={1}>
          <GridContainer spacing={2}>
            <Grid item>
              <Link
                to={`/itemview/${myitem._id}/${type}`}
                className={classes.link}
              >
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={banana} />
                </ButtonBase>
              </Link>
            </Grid>
            <GridContainer xs={12} sm item spacing={0} direction="column">
              <GridItem align="left" xs={12} className={classes.cell}>
                <Link
                  to={`/itemview/${myitem._id}/${type}`}
                  className={classes.link}
                >
                  <Typography gutterBottom variant="body1">
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
                      direction="row"
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        md={5}
                        lg={5}
                        className={classes.cell}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          Category:
                        </Typography>
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        align="left"
                        className={classes.cell}
                      >
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          gutterBottom
                          align="left"
                        >
                          {myitem.category[0]}
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
                      direction="row"
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        md={5}
                        lg={5}
                        className={classes.cell}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          Location:
                        </Typography>
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        align="left"
                        className={classes.cell}
                      >
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          gutterBottom
                          align="left"
                        >
                          {myitem.postcode}
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
                      direction="row"
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        md={5}
                        lg={5}
                        className={classes.cell}
                      >
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          Expires:
                        </Typography>
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        align="left"
                        className={classes.cell}
                      >
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          gutterBottom
                          align="left"
                        >
                          {moment(myitem.expiry).format('Do MMM YY')}
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
                      direction="row"
                      className={classes.container}
                    >
                      <GridItem
                        xs={5}
                        sm={5}
                        md={5}
                        lg={5}
                        className={classes.cell}
                      >
                        {myitem.availability !== null && GetCollectionMsg(type)}
                      </GridItem>
                      <GridItem
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        align="left"
                        className={classes.cell}
                      >
                        {myitem.availability !== null && (
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            gutterBottom
                            align="left"
                          >
                            {myitem.availability}
                          </Typography>
                        )}
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={12} align="right">
                <Button
                  onClick={handleOnClickAgreeCup}
                  color={myitem.c_user_uid === null ? 'default' : 'secondary'}
                >
                  <EmojiEvent />
                </Button>
                {type === 'provide' && (
                  <Link
                    to={`/editItem/${myitem._id}`}
                    className={classes.link}
                  >
                    <Button>
                      <Edit />
                    </Button>
                  </Link>
                )}
                <Button onClick={handleOnClickDelete}>
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

MyItemListing.propTypes = {
  type: PropTypes.string,
  myitem: PropTypes.instanceOf(Object),
  deleteItem: PropTypes.func,
  unreserveItem: PropTypes.func
};
