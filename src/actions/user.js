import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage('en');
Geocode.enableDebug();

export const types = {
  GET_USER_ADDRESS: 'GET_USER_ADDRESS',
  GET_USER_ADDRESS_ERROR: 'GET_USER_ADDRESS_ERROR'
};

export const getAddress = postcode => async dispatch => {
  Geocode.fromAddress(postcode).then(
    response => {
      dispatch({
        type: types.GET_USER_ADDRESS,
        payload: {
          address: response.results[0].formatted_address,
          location: response.results[0].geometry.location,
          addrstatus: response.status
        }
      });
    },
    error => {
      dispatch({
        type: types.GET_USER_ADDRESS_ERROR,
        payload: { err: error, addrstatus: 'Not OK' }
      });
    }
  );
};

export const types = {
  USER_LOADED: 'USER_LOADED',
  USER_LOAD_FAILURE: 'USER_LOAD_FAILURE'
};

export const userLoaded = user => ({
  type: types.USER_LOADED,
  user
});

export const userLoadError = () => ({
  type: types.USER_LOAD_FAILURE
});

