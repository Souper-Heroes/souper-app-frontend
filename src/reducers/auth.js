import { types } from 'actions';

const auth = (state = { jwt: '', message: '', isLogged: false }, action) => {
    switch (action.type) {
        case `${types.LOGIN}_FULFILLED`:
            state.jwt = action.payload.data.token;
            state.isLogged = true;
            break;
        case `${types.CHECK}_FULFILLED`:
            state.message = action.payload.data.message;
            break;
    }
    return state;
};

export default auth;
