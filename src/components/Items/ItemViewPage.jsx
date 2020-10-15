import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import styles from 'assets/jss/Items/views/ItemViewPage';
import banana from 'assets/img/purple-banana.jpg';
import moment from 'moment';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

export default function ItemViewPage(props) {
  // console.log('VIEW PAGE PROPS', props);
  const { _id, item } = props;

  const [isDisableAmendBtn, setIsDisableAmendBtn] = useState(true);
  // const [availability, setAvailability] = useState(item.availability);

  const classes = useStyles();

  const handleOnClickReserve = () => {
    // console.log(`Clicked Reserve Account, do something with DisplayName: `);
    props.reserveItem(_id, item._id);
  };

  const handleOnClickUnreserve = () => {
    // console.log(`Clicked Reserve Account, do something with DisplayName: `);
    props.unreserveItem(_id, item._id);
  };

  const handleOnClickAmendTime = () => {
    // Update backend with new amended dates

    props.updateCollectionDates(item._id, item.availability);

    setIsDisableAmendBtn(true);
  };

  const handleOnClickCancel = () => {
    // console.log(`Clicked Cancel Account, do something with DisplayName: `);
  };

  // console.log(
  //   'CollectStartTime:',
  //   availability,
  //   'PropStartTime:',
  //   props.item.availability
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
                src={banana}
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
                      {moment(item.expiry_date).format('Do MMM YYYY')}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
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
                      Collection Details:
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      gutterBottom
                    >
                      {item.availability}
                    </Typography>
                  </GridItem>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className={classes.output}
                  />
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
                  {item.c_user_id === null && (
                    <Button
                      className={classes.button_label}
                      color="success"
                      size="sm"
                      onClick={handleOnClickReserve}
                    >
                      Reserve
                    </Button>
                  )}
                  {_id === item.c_user_id && (
                    <Button
                      className={classes.button_label}
                      color="success"
                      size="sm"
                      onClick={handleOnClickUnreserve}
                    >
                      Unreserve
                    </Button>
                  )}
                </GridItem>
              </GridItem>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

ItemViewPage.propTypes = {
  _id: PropTypes.string,
  item: PropTypes.instanceOf(Object),
  reserveItem: PropTypes.func,
  unreserveItem: PropTypes.func,
  updateCollectionDates: PropTypes.func,
};

/* TODO Logic to amend item if you are collecting
 {_id !== item.c_user_id && (
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        align="left"
                        gutterBottom
                      >
                        {availability}
                      </Typography>
                    )}
                    {_id === item.c_user_id && (
                      <CustomInput
                        id="Collection Availability"
                        inputProps={{
                          placeholder: `${availability}`,
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    )} */

/* form control input
<FormControl>
                          <Datetime
                            value={availability}
                            onChange={event =>
                              handleCollectionDateChange('start', event)
                            }
                            inputProps={{
                              placeholder: item.availability,
                            }}
                          />
                          </FormControl>
const handleCollectionDateChange = (type, event) => {

    const newDate = event;

    // console.log('converted newDate', newDate);

    //if (!newDate.isValid()) throw new Error('Invalid Date passed');
    // console.log(
    //  `Handle Date Change1, do something with ${type} ${newDate} ${newDate.isValid()}`
    // );

    if (newDate === item.availability) {
      // Nothing has changed
      // console.log(
      //  `Handle Date Change2, do something with ${type} ${availability}`
      // );
      setAvailability(newDate);
      // Disable Amend button as nothing has changed compared with the backend
      setIsDisableAmendBtn(true);
      return;
    }

    // Dates have changed so provide option to update the backend with Amend Button displayed
    setAvailability(newDate);
    setIsDisableAmendBtn(false);
  };
*/
