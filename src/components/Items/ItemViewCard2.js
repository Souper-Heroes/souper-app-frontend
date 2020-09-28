/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from 'assets/jss/Items/views/MyListingsPage.js';

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div className={classes.section}>
      <Card className={classes2.root}>
        <CardActionArea>
          <CardMedia
            className={classes2.media}
            image={require('assets/img/purple-banana.jpg')}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Lizard
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
