// import * as routes from 'components/Routing/routes';
import Geocode from 'react-geocode';
import api from '../utils/api';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage('en');
Geocode.enableDebug();

export const types = {
  USER_LOADED: 'USER_LOADED',
  USER_LOAD_FAILURE: 'USER_LOAD_FAILURE',
  GET_USER_ADDRESS: 'GET_USER_ADDRESS',
  GET_USER_ADDRESS_ERROR: 'GET_USER_ADDRESS_ERROR',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  ADD_USER_LOCATION: 'ADD_USER_LOCATION'
};

export const userLoaded = user => ({
  type: types.USER_LOADED,
  user
});

export const userLoadError = () => ({
  type: types.USER_LOAD_FAILURE
});

export const updateProfile = payload => dispatch => {
  dispatch({ type: types.ADD_USER_LOCATION });
  dispatch({
    type: types.UPDATE_PROFILE,
    payload: api.put('/users', payload)
  });
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

export const getAddressProfile = postcode => Geocode.fromAddress(postcode).then(response => ({
  address: response.results[0].formatted_address,
  location: response.results[0].geometry.location
}));
