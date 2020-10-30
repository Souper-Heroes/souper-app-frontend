// import { container, title } from 'assets/jss/material-kit-react.js';

// import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.js';

const ItemViewPageStyle = {
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 10px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  root: {
    maxWidth: 600,
    marginTop: 50,
    marginBottom: 50
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
  },

  cardcontainer: {
    marginLeft: '0px',
    marginRight: '1em'
  }
};

export default ItemViewPageStyle;
