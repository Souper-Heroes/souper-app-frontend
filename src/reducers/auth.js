import { types } from 'actions';

const initialState = { jwt: '', message: '', isLogged: false };

const auth = (state = {...initialState}, action) => {
    switch (action.type) {
        case `${types.LOGIN}_FULFILLED`:
            return { ...state, jwt: action.payload.data.token, isLogged: true};
        case `${types.CHECK}_FULFILLED`:
            return { ...state, message: action.payload.data.message};
        case types.LOGOUT:
            return {...initialState};
        default:
            if (state.isLogged && action.type.includes('_REJECTED') && [401, 403].includes(action.payload.response.status)) {
                return {...initialState};
            }
    }
    return state;
};

export default auth;
