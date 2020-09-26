import React from 'react';

import Paginations from 'components/MaterialKitComponents/Pagination/Pagination.js';

export default function ListingsPagination(props) {
  return (
    <div>
      <Paginations
        pages={[
          { text: 'PREV' },
          { text: 1 },
          { active: true, text: 2 },
          { text: 3 },
          { text: 'NEXT' },
        ]}
        color='rose'
      />
    </div>
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
