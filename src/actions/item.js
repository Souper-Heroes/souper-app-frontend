import api from '../utils/api';

export const types = {
  ADD_ITEM: 'ADD_ITEM',
  ADD_ITEM_ERROR: 'ADD_ITEM_ERROR',
  ADD_ITEM_RESET_FORM: 'ADD_ITEM_RESET_FORM',
  GET_ITEM: 'GET_ITEM',
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEM_ERROR: 'GET_ITEM_ERROR',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR',
  GET_MY_ITEMS: 'GET_MY_ITEMS',
  GET_MY_ITEMS_ERROR: 'GET_MY_ITEMS_ERROR',
  GET_PROVIDER_ITEMS: 'GET_PROVIDER_ITEMS',
  GET_COLLECTOR_ITEMS: 'GET_COLLECTOR_ITEMS',
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES',
  RESERVE_ITEM: 'RESERVE_ITEM',
  UNRESERVE_ITEM: 'UNRESERVE_ITEM',
  UNRESERVE_ITEM_ERROR: 'UNRESERVE_ITEM_ERROR',
};

export const addItem = formData => async dispatch => {
  try {
    const res = await api.post('/items', formData);
    dispatch({
      type: types.ADD_ITEM,
      payload: res.data,
    });
    return true;
  } catch (err) {
    // do something with error
    // console.log(err);
    dispatch({
      type: types.ADD_ITEM_ERROR,
    });
    return false;
  }
};

export const getItem = _id => async dispatch => {
  try {
    const res = await api.get('/items/_id');
    dispatch({
      type: types.GET_ITEM,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: types.GET_ITEM_ERROR,
    });
  }
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

export const getProviderItems = _id => async dispatch => {
  try {
    // console.log('***** ABOUT TO CALL getProviderItems:', _id);

    const res = await api.get(`/items/provider/${_id}`);

    dispatch({
      type: types.GET_PROVIDER_ITEMS,
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

export const getCollectorItems = _id => async dispatch => {
  try {
    // onsole.log('***** ABOUT TO CALL getProviderItems:', _id);

    const res = await api.get(`/items/collector/${_id}`);

    dispatch({
      type: types.GET_COLLECTOR_ITEMS,
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

export const getMyItems = () => async dispatch => {
  try {
    const res = await api.get('/items/user_id');

    dispatch({
      type: types.GET_MY_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    // do something with error
    // console.log(err);
    dispatch({
      type: types.GET_MY_ITEMS_ERROR,
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

export const reserveItem = _id => async dispatch => {
  try {
    const res = await api.put(`/items/reserve/${_id}`);

    dispatch({
      type: types.RESERVE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    // do something with error
    // console.log(err);
    dispatch({
      type: types.GET_ITEMS_ERROR, // TODO set the correct ERROR FOR UPDATE
    });
  }
};

export const unreserveItem = _id => async dispatch => {
  try {
    const res = await api.put(`/items/unreserve/${_id}`);

    dispatch({
      type: types.UNRESERVE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: types.UNRESERVE_ITEM_ERROR, // TODO set the correct ERROR FOR UPDATE
    });
  }
};
