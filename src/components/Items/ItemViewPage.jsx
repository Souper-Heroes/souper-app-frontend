import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Typography from '@material-ui/core/Typography';
import styles from 'assets/jss/Items/views/ItemViewPage';
// import banana from 'assets/img/purple-banana.jpg';
import moment from 'moment';
import PropTypes from 'prop-types';
import * as ROUTES from 'components/Routing/routes';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Avatar from '@material-ui/core/Avatar';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(styles);

export default function ItemViewPage({
  _id,
  item,
  type,
  // updateCollectionDates,
  unreserveItem,
  reserveItem,
  history
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (item == null) {
    // window.history.back();
    history.push(ROUTES.ITEM_LIST);
  }

  const handleOnClickReserve = e => {
    e.preventDefault();
    reserveItem(item._id, history);
  };

  const handleOnClickUnreserve = e => {
    e.preventDefault();
    unreserveItem(item._id, history);
  };

  // const handleOnClickAmendTime = id => {
  //  // Update backend with new amended dates
  //  updateCollectionDates(id, item.availability);
  // };

  const handleOnClickCancel = () => {
    window.history.back();
  };

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <GridContainer justify="center" padding="50px">
          <Card className={classes.root}>
            <CardHeader
              // /* { avatar={
              //  <Avatar aria-label="recipe" className={classes.avatar}>
              //    R
              //  </Avatar>
              // } */
              action={(
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              )}
              title={<h4><strong>{item.title}</strong></h4>}
              subheader={`Expires on ${moment(item.expiry).format('Do MMM YYYY')} ${moment(item.expiry).diff(moment(), 'days') > 0
                && moment(item.expiry).diff(moment(), 'days') < 3 ? ' - Hurry expires soon!' : ''}`}
            />
            <CardMedia
              className={classes.media}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <GridContainer direction="row">

                <GridItem xs={6}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Category:&nbsp;</strong>
                    {`${item.category.map(i => i).reduce((p, c) => `${p} ${c}`, '')}`}
                  </Typography>
                </GridItem>
                <GridItem xs={6}>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.nospace}>
                    <strong>Date Added:&nbsp;</strong>
                    {`${moment(item.date).format('Do MMM YYYY')}`}
                  </Typography>
                </GridItem>
                {item.address && item.address.trim().length > 0 && (
                  <GridItem xs={6}>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.nospace}>
                      <strong>Address:&nbsp;</strong>
                      {`${item.address}`}
                    </Typography>
                  </GridItem>
                )}
                <GridItem xs={6}>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.nospace}>
                    <strong>Post Code:&nbsp;</strong>
                    {`${item.postcode}`}
                  </Typography>
                </GridItem>
                <GridItem xs={12}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Availability:&nbsp;</strong>
                    {`${item.availability}`}
                  </Typography>
                </GridItem>

              </GridContainer>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {(type === 'collect' || type === 'search') && item.c_user_uid === null && (
                <Button
                  className={classes.button_label}
                  color="success"
                  size="sm"
                  onClick={handleOnClickReserve}
                >
                  Reserve
                </Button>
              )}
              {(type === 'collect' || type === 'search') && item.c_user_uid !== null && _id === item.c_user_uid && (
                <Button
                  className={classes.button_label}
                  color="success"
                  size="sm"
                  onClick={handleOnClickUnreserve}
                >
                  Unreserve
                </Button>
              )}
              <Button
                className={classes.button_label}
                color="danger"
                size="sm"
                onClick={handleOnClickCancel}
              >
                Cancel
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Description:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </GridContainer>
      </div>
    </div>
  );
}

ItemViewPage.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.string,
  item: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
  reserveItem: PropTypes.func,
  unreserveItem: PropTypes.func
};
