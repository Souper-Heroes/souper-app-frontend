import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/MaterialKitComponents/Header/Header.js';
import Footer from 'components/MaterialKitComponents/Footer/Footer.js';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';
import Button from 'components/MaterialKitComponents/CustomButtons/Button.js';
import HeaderLinks from 'components/MaterialKitComponents/Header/HeaderLinks.js';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax.js';

import styles from 'assets/jss/Items/views/MyListingsPage.js';

// Sections for this page
import ListingTabSection from './Sections/ListingTabSection.js';
import ProductSection from './Sections/ProductSection.js';
import TeamSection from './Sections/TeamSection.js';
import WorkSection from './Sections/WorkSection.js';
import SouperFooter from 'components/layout/SouperFooter';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function MyListingsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax
        className={classes.maxHeight}
        image={require('assets/img/citrus-fruit.jpg')}
      ></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {
            <ListingTabSection />
            //<ProductSection />
            //<TeamSection />
            //<WorkSection />
          }
        </div>
      </div>
      <SouperFooter />
    </div>
  );
}
