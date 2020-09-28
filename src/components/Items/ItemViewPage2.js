/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { container, title } from 'assets/jss/material-kit-react.js';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import styles from 'assets/jss/material-kit-react/views/profilePage.js';

import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
//import Button from 'components/CustomButtons/Button.js';

//import styles from 'assets/jss/material-kit-react/views/profilePage.js';

const useStyles = makeStyles(styles);

const usePaperStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container,

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '600',
    alignItems: 'center',
    justify: 'center',
  },

  image: {
    width: 250,
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    padding: '10px 0px',
    textAlign: 'center',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  box: {
    margin: 'auto',
  },
}));

function ItemViewPage({ myitem }) {
  //const [userItems, setUserItems] = React.useState(state);

  const classes = useStyles();
  const paperClasses = usePaperStyles();

  return (
    <div className={classNames(paperClasses.main, paperClasses.mainRaised)}>
      <GridItem xs={12}>
        <Paper className={paperClasses.paper}>
          <GridContainer>
            <GridItem align='center'>
              <div className={paperClasses.image}>
                <img
                  className={paperClasses.img}
                  alt='complex'
                  src={require('assets/img/purple-banana.jpg')}
                />
              </div>
            </GridItem>
          </GridContainer>
        </Paper>
      </GridItem>
    </div>
  );
}

export default ItemViewPage;
