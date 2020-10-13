import api from '../utils/api';

export const types = {
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR'
};

export const getItems = () => async dispatch => {
  try {
    const res = await api.get('/items');

    dispatch({
      type: types.GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
    // do something with error
    console.log(err);
    dispatch({
      type: types.GET_ITEMS_ERROR
    });
  }
};
