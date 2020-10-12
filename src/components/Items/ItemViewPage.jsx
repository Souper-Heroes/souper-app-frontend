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
  // console.log('VIEW PAGE PROPS', props);
  const { uuid, item } = props;

  const [isDisableAmendBtn, setIsDisableAmendBtn] = useState(true);

  const [collectionStartDateTime, setCollectionStartDateTime] = useState(
    item.preferredCollectStartTime
  );

  const [collectionEndDateTime, setCollectionEndDateTime] = useState(
    item.preferredCollectEndTime
  );

  const classes = useStyles();

  const handleOnClickReserve = () => {
    // console.log(`Clicked Reserve Account, do something with DisplayName: `);
  };

  const handleOnClickAmendTime = () => {
    // Update backend with new amended dates

    props.updateCollectionDates(
      item.itemId,
      collectionStartDateTime.toISOString(),
      collectionEndDateTime.toISOString()
    );

    setIsDisableAmendBtn(true);
  };

  const handleOnClickCancel = () => {
    // console.log(`Clicked Cancel Account, do something with DisplayName: `);
  };

  const handleCollectionDateChange = (type, event) => {
    const newDate = moment(event);
    if (!newDate.isValid()) throw new Error('Invalid Date passed');
    // console.log(
    //  `Handle Date Change1, do something with ${type} ${newDate} ${newDate.isValid()}`
    // );

    if (
      type === 'start'
        ? newDate.isSame(moment(item.preferredCollectStartTime)) &&
          collectionEndDateTime.isSame(moment(item.preferredCollectEndTime))
        : newDate.isSame(moment(item.preferredCollectEndTime)) &&
          collectionStartDateTime.isSame(moment(item.preferredCollectStartTime))
    ) {
      // Nothing has changed
      // console.log(
      //  `Handle Date Change2, do something with ${type} ${collectionStartDateTime} ${collectionStartDateTime.isValid()}`
      // );
      if (type === 'start') {
        setCollectionStartDateTime(newDate);
      } else {
        setCollectionEndDateTime(newDate);
      }
      // Disable Amend button as nothing has changed compared with the backend
      setIsDisableAmendBtn(true);
      return;
    }

    // Dates have changed so provide option to update the backend with Amend Button displayed
    if (type === 'start') {
      setCollectionStartDateTime(newDate);
    } else {
      setCollectionEndDateTime(newDate);
    }

    setIsDisableAmendBtn(false);
  };

  // console.log(
  //   'CollectStartTime:',
  //   collectionStartDateTime,
  //   'PropStartTime:',
  //   props.item.preferredCollectStartTime
  // );

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
                <strong>{item.description}</strong>
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
                      {item.category}
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
                      {item.location}
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
                      {moment(item.expiryDate).format('Do MMM YYYY')}
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
                    {uuid !== item.collectUserId && (
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        align="left"
                        gutterBottom
                      >
                        {moment(collectionStartDateTime).isValid()
                          ? moment(collectionStartDateTime).format(
                              'Do MMM YY hh:mm '
                            )
                          : ''}
                      </Typography>
                    )}
                    {uuid === item.collectUserId && (
                      <>
                        <FormControl>
                          <Datetime
                            value={
                              moment(collectionStartDateTime).isValid()
                                ? moment(collectionStartDateTime).format(
                                    'Do MMM YY hh:mm'
                                  )
                                : ''
                            }
                            onChange={event =>
                              handleCollectionDateChange('start', event)
                            }
                            inputProps={{
                              placeholder: moment(
                                item.preferredCollectStartTime
                              ).isValid()
                                ? `${moment(
                                    item.preferredCollectStartTime
                                  ).format('Do MMM YY hh:mm')}`
                                : '',
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
                    {uuid !== item.collectUserId && (
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        align="left"
                        gutterBottom
                      >
                        {moment(collectionEndDateTime).isValid()
                          ? moment(collectionEndDateTime).format(
                              'Do MMM YY hh:mm'
                            )
                          : ''}
                      </Typography>
                    )}
                    {uuid === item.collectUserId && (
                      <>
                        <FormControl>
                          <Datetime
                            value={
                              moment(collectionEndDateTime).isValid()
                                ? moment(collectionEndDateTime).format(
                                    'Do MMM YY hh:mm'
                                  )
                                : ''
                            }
                            onChange={event =>
                              handleCollectionDateChange('end', event)
                            }
                            inputProps={{
                              placeholder: moment(
                                item.preferredCollectEndTime
                              ).isValid()
                                ? `${moment(
                                    item.preferredCollectEndTime
                                  ).format('Do MMM YY hh:mm')}`
                                : '',
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
