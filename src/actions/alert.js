import { v4 as uuidv4 } from 'uuid';

export const types = {
  SET_ALERT: 'SET_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT',
};

export const setAlert = (
  msg,
  alertType,
  displayType,
  timeout = 5000
) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: types.SET_ALERT,
    payload: {
      msg,
      alertType,
      displayType,
      id,
    },
  });

  setTimeout(
    () => dispatch({ type: types.REMOVE_ALERT, payload: id }),
    timeout
  );
};
