// import { container, title } from 'assets/jss/material-kit-react.js';

// import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.js';

const ItemViewPageStyle = {
  root: {
    maxWidth: 600,
    marginTop: 50
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto'
    // transition: theme.transitions.create('transform', {
    //  duration: theme.transitions.duration.shortest,
    // }
    // ),
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },

  // avatar: {
  //  backgroundColor: red[500],
  // },

  nospace: {
    display: 'flex',
    whiteSpace: 'nowrap'
    // overflow: 'hidden'
    // marginRight: '1em'
  },

  cardcontainer: {
    marginLeft: '0px',
    marginRight: '1em'
  }
};

export default ItemViewPageStyle;
