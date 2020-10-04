import axios from 'axios';

export const types = {
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
    LOGIN: 'LOGIN',
    CHECK: 'CHECK'
};

export const login = (email, password) => ({
    type: types.LOGIN,
    payload: axios.post('http://localhost:3000/login', {email, password})
});

export const check = () => (dispatch, getState) => dispatch(({
    type: types.CHECK,
    payload: axios.get('http://localhost:3000/check', {headers: { Authorization: getState().auth.jwt}})
}));

export const updateMessage = text => ({
    type: types.UPDATE_MESSAGE,
    text
});
