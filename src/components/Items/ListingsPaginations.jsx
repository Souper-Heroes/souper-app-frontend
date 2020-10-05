import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ItemPaginations from 'components/Items/ItemPaginations';

const useStyles = makeStyles(() => ({
  box: {
    margin: 'auto',
  },
}));

export default function ListingsPaginations() {
  const classes = useStyles();

  return (
    <ItemPaginations
      className={classes.box}
      pages={[
        { text: 'PREV' },
        { text: 1 },
        { active: true, text: 2 },
        { text: 3 },
        { text: 'NEXT' },
      ]}
      color="rose"
    />
  );
}
