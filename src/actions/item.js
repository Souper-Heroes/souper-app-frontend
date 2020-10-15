import api from '../utils/api';

export const types = {
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR',
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
<<<<<<< HEAD
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES',
  RESERVE_ITEM: 'RESERVE_ITEM',
  UNRESERVE_ITEM: 'UNRESERVE_ITEM',
=======
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES'
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
>>>>>>> e8a8e3737108682483865c72aaad390e23f51fae
};

export const deleteItem = _id => ({
  type: types.DELETEITEM,
<<<<<<< HEAD
  _id,
=======
  itemId
>>>>>>> e8a8e3737108682483865c72aaad390e23f51fae
});

export const sortByItem = menuItem => ({
  type: types.SORTITEM,
  menuItem
});

export const updateCollectionDates = (_id, availability) => ({
  type: types.UPDATE_COLLECTDATES,
<<<<<<< HEAD
  _id,
  availability,
  success: true,
=======
  itemId,
  collectionStartDateTime,
  collectionEndDateTime,
  success: true
>>>>>>> e8a8e3737108682483865c72aaad390e23f51fae
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
