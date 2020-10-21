// import * as routes from 'components/Routing/routes';
import api from '../utils/api';

export const types = {
    GET_PROFILE: 'GET_PROFILE',
    UPDATE_PROFILE: 'UPDATE_PROFILE'
};

export const getProfile = () => (dispatch) => dispatch(({
    type: types.GET_PROFILE,
    payload: api.get(`/users`)
}));

export const updateProfile = payload => (dispatch) => dispatch(({
    type: types.UPDATE_PROFILE,
    payload: api.put(`/users`, payload)
}));
