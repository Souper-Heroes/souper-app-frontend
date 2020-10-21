// import * as routes from 'components/Routing/routes';
import api from '../utils/api';

export const types = {
  // GET_PROFILE: 'GET_PROFILE',
  USER_LOADED: 'USER_LOADED',
  USER_LOAD_FAILURE: 'USER_LOAD_FAILURE',
  UPDATE_PROFILE: 'UPDATE_PROFILE'
};

export const userLoaded = user => ({
  type: types.USER_LOADED,
  user
});

export const userLoadError = () => ({
  type: types.USER_LOAD_FAILURE
});

/*export const getProfile = () => (dispatch) => dispatch(({
    type: types.GET_PROFILE,
    payload: api.get(`/users`)
}));*/

export const updateProfile = payload => (dispatch) => dispatch(({
    type: types.UPDATE_PROFILE,
    payload: api.put(`/users`, payload)
}));
