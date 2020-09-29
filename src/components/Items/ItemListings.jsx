import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import styles from 'assets/jss/material-kit-react/views/profilePage';

const useStyles = makeStyles(styles);

function Page() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Christian Louboutin</h3>
                  <h6>DESIGNER</h6>
                  <Button justIcon link className={classes.margin5}>
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button justIcon link className={classes.margin5}>
                    <i className="fab fa-facebook" />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.

            </p>
          </div>
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={12}
              md={8}
              className={classes.navWrapper}
            />
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default Page;
