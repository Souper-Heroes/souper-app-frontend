import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import Datetime from 'react-datetime';
import FormControl from '@material-ui/core/FormControl';
import styles from 'assets/jss/Items/views/ItemViewPage';
import moment from 'moment';

const useStyles = makeStyles(styles);

export default function ItemViewPage(props) {
  //const [currentItem, setCurrentItem] = useState(item);
  const [isDisableAmendBtn, setIsDisableAmendBtn] = useState(true);

  // const [collectionStartDateTime, setCollectionStartDateTime] = useState(
  //  moment(currentItem.preferredCollectStartTime)
  // );
  const [collectionStartDateTime, setCollectionStartDateTime] = useState(
    moment(props.item.preferredCollectStartTime)
  );
  // const [collectionEndDateTime, setCollectionEndDateTime] = useState(
  //  moment(currentItem.preferredCollectEndTime)
  // );

  const [collectionEndDateTime, setCollectionEndDateTime] = useState(
    moment(props.item.preferredCollectEndTime)
  );

  const classes = useStyles();
  // TODO Default for now for testing but will get passed from props
  //const userid = props.location.userId;
  //const userid = 1;

  const handleOnClickReserve = () => {
    //console.log(`Clicked Reserve Account, do something with DisplayName: `);
  };

  const handleOnClickAmendTime = () => {
    //let newItem = currentItem;
    let newItem = props.item;

    newItem.preferredCollectStartTime = collectionStartDateTime;
    newItem.preferredCollectEndTime = collectionEndDateTime;

    // TODO
    //setCurrentItem(newItem);
    setIsDisableAmendBtn(true);
    // console.log(
    //  `Handle Date Change3, do something with ${collectionStartDateTime} ${collectionStartDateTime.isValid()}`
    // );
  };

  const handleOnClickCancel = () => {
    //console.log(`Clicked Cancel Account, do something with DisplayName: `);
  };

  const handleCollectionDateChange = (type, event) => {
    const newDate = moment(event);
    // console.log(
    //  `Handle Date Change1, do something with ${type} ${newDate} ${newDate.isValid()}`
    // );

    if (
      type === 'start'
        ? newDate.isSame(moment(props.item.preferredCollectStartTime)) &&
          collectionEndDateTime.isSame(
            moment(props.item.preferredCollectEndTime)
          )
        : newDate.isSame(moment(props.item.preferredCollectEndTime)) &&
          collectionStartDateTime.isSame(
            moment(props.item.preferredCollectStartTime)
          )
    ) {
      // Nothing has changed
      // console.log(
      //  `Handle Date Change2, do something with ${type} ${collectionStartDateTime} ${collectionStartDateTime.isValid()}`
      // );
      type === 'start'
        ? setCollectionStartDateTime(
            moment(props.item.preferredCollectStartTime)
          )
        : setCollectionEndDateTime(moment(props.item.preferredCollectEndTime));
      setIsDisableAmendBtn(true);
      return;
    }

    type === 'start'
      ? setCollectionStartDateTime(newDate)
      : setCollectionEndDateTime(newDate);

    setIsDisableAmendBtn(false);
  };

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem className={classes.border}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <img
                className={classes.img}
                alt="item of food"
                src={require('assets/img/purple-banana.jpg')}
                justify="center"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Typography
                align="center"
                variant="body1"
                color="error"
                gutterBottom
              >
                Expires soon!
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Typography align="center" variant="body1" gutterBottom>
                <strong>{props.item.description}</strong>
              </Typography>
            </GridItem>
            <GridContainer align="center">
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align="center" spacing={0} direction="column">
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="left"
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
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      gutterBottom
                    >
                      {props.item.category}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align="center" spacing={0} direction="column">
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="left"
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
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      gutterBottom
                    >
                      {props.item.location}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <GridContainer align="center">
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align="center" spacing={0} direction="column">
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="left"
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
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      gutterBottom
                    >
                      {props.item.expiryDate}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6} />
            </GridContainer>
            <GridContainer align="center">
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align="left" spacing={0} direction="column">
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="left"
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
                    {props.userId !== props.item.collectUserId && (
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        align="left"
                        gutterBottom
                      >
                        {moment(collectionStartDateTime).format(
                          'Do MMM YY hh:mm'
                        )}
                      </Typography>
                    )}
                    {props.userId === props.item.collectUserId && (
                      <>
                        <FormControl>
                          <Datetime
                            value={moment(collectionStartDateTime).format(
                              'Do MMM YY hh:mm'
                            )}
                            onChange={(event) =>
                              handleCollectionDateChange('start', event)
                            }
                            inputProps={{
                              placeholder: `${moment(
                                props.item.preferredCollectStartTime !==
                                  undefined
                                  ? props.item.preferredCollectStartTime
                                  : ''
                              ).format('Do MMM YY hh:mm')}`,
                            }}
                          />
                        </FormControl>
                      </>
                    )}
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <GridContainer align="right" spacing={0} direction="column">
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="left"
                    >
                      End Time Slot:
                    </Typography>
                  </GridItem>
                  <GridItem
                    align="left"
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.label}
                  >
                    {props.userId !== props.item.collectUserId && (
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        align="left"
                        gutterBottom
                      >
                        {moment(collectionEndDateTime).format(
                          'Do MMM YY hh:mm'
                        )}
                      </Typography>
                    )}
                    {props.userId === props.item.collectUserId && (
                      <>
                        <FormControl>
                          <Datetime
                            value={moment(collectionEndDateTime).format(
                              'Do MMM YY hh:mm'
                            )}
                            onChange={(event) =>
                              handleCollectionDateChange('end', event)
                            }
                            inputProps={{
                              placeholder: `${moment(
                                props.item.preferredCollectEndTime !== undefined
                                  ? props.item.preferredCollectEndTime
                                  : ''
                              ).format('Do MMM YY hh:mm')}`,
                            }}
                          />
                        </FormControl>
                      </>
                    )}
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <GridItem align="center" container>
              <GridItem align="center" xs={12} sm={6}>
                {!isDisableAmendBtn && (
                  <Button
                    className={classes.button_label}
                    color="rose"
                    size="sm"
                    onClick={handleOnClickAmendTime}
                  >
                    Amend Time
                  </Button>
                )}
              </GridItem>
              <GridItem xs={12} sm={6} align="center" container>
                <GridItem xs={6} sm={6} align="right">
                  <Button
                    className={classes.button_label}
                    color="danger"
                    size="sm"
                    onClick={handleOnClickCancel}
                  >
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={6} sm={6} align="left">
                  <Button
                    className={classes.button_label}
                    color="success"
                    size="sm"
                    onClick={handleOnClickReserve}
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
