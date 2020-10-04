import { types } from 'actions';

const auth = (state = { jwt: '', message: '', isLogged: false }, action) => {
    const newState = {...state};
    switch (action.type) {
        case `${types.LOGIN}_FULFILLED`:
            newState.jwt = action.payload.data.token;
            newState.isLogged = true;
            break;
        case `${types.CHECK}_FULFILLED`:
            newState.message = action.payload.data.message;
            break;
    }
    return newState;
};

export default auth;
