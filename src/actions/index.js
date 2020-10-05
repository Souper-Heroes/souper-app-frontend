import axios from 'axios';

const SOUP_API = 'https://souper-app-backend.herokuapp.com';

export const types = {
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
    LOGIN: 'LOGIN',
    LOGOUT:'LOGOUT',
    CHECK: 'CHECK'
};

export const login = (email, password) => ({
    type: types.LOGIN,
    payload: axios.post(`${SOUP_API}/login`, {email, password})
});

export const logout = () => ({
    type: types.LOGOUT
});

export const check = () => (dispatch, getState) => dispatch(({
    type: types.CHECK,
    payload: axios.get(`${SOUP_API}/check`, {headers: { Authorization: getState().auth.jwt}})
}));

export const updateMessage = text => ({
    type: types.UPDATE_MESSAGE,
    text
});
