import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paginations from 'components/MaterialKitComponents/Pagination/Pagination';

const useStyles = makeStyles(() => ({
  box: {
    margin: 'auto',
  },
}));

export default function ListingsPagination() {
  const classes = useStyles();

  return (
    <Paginations
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

/*
Props:

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["PREV", "NEXT", "..."])
      ]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};
*/
