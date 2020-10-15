import api from '../utils/api';

export const types = {
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR',
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES',
  RESERVE_ITEM: 'RESERVE_ITEM',
  UNRESERVE_ITEM: 'UNRESERVE_ITEM',
};

export const getItems = () => async dispatch => {
  try {
    const res = await api.get('/items');

    dispatch({
      type: types.GET_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    // do something with error
    // console.log(err);
    dispatch({
      type: types.GET_ITEMS_ERROR,
    });
  }
};

export const deleteItem = _id => ({
  type: types.DELETEITEM,
  _id,
});

export const sortByItem = menuItem => ({
  type: types.SORTITEM,
  menuItem,
});

export const updateCollectionDates = (_id, availability) => ({
  type: types.UPDATE_COLLECTDATES,
  _id,
  availability,
  success: true,
});

export const reserveItem = (_id, itemId) => ({
  type: types.RESERVE_ITEM,
  _id,
  itemId,
});

export const unreserveItem = (_id, itemId) => ({
  type: types.UNRESERVE_ITEM,
  _id,
  itemId,
});
