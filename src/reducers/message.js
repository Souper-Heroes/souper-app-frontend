import { types } from 'actions/message';

const message = (state = 'Hello Redux!', action) => {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      return `Hello ${action.text}`;
    default:
      return state;
  }
};

export default message;
