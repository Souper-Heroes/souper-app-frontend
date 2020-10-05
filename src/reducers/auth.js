import { types } from 'actions';

const initialState = { jwt: '', message: '', isLogged: false };

const auth = (state = {...initialState}, action) => {
    let newState = {...state};
    switch (action.type) {
        case `${types.LOGIN}_FULFILLED`:
            newState.jwt = action.payload.data.token;
            newState.isLogged = true;
            break;
        case `${types.CHECK}_FULFILLED`:
            newState.message = action.payload.data.message;
            break;
        case types.LOGOUT:
            newState = {...initialState};
            break;
    }
    return newState;
};

export default auth;
