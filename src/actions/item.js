import api from '../utils/api';

export const types = {
  ADD_ITEM: 'ADD_ITEM',
  ADD_ITEM_ERROR: 'ADD_ITEM_ERROR',
  ADD_ITEM_RESET_FORM: 'ADD_ITEM_RESET_FORM',
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR',
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES'
};

export const addItem = formData => async dispatch => {
  try {
    const res = await api.post('/items', formData);
    dispatch({
      type: types.ADD_ITEM,
      payload: res.data
    });
    return true;
  } catch (err) {
    // do something with error
    // console.log(err);
    dispatch({
      type: types.ADD_ITEM_ERROR
    });
    return false;
  }
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
    // console.log(err);
    dispatch({
      type: types.GET_ITEMS_ERROR
    });
  }
};

export const deleteItem = itemId => ({
  type: types.DELETEITEM,
  itemId
});

export const sortByItem = menuItem => ({
  type: types.SORTITEM,
  menuItem
});

export const updateCollectionDates = (
  itemId,
  collectionStartDateTime,
  collectionEndDateTime
) => ({
  //
  type: types.UPDATE_COLLECTDATES,
  itemId,
  collectionStartDateTime,
  collectionEndDateTime,
  success: true
});
