import * as ROUTES from 'components/Routing/routes';
import moment from 'moment';
import api from '../utils/api';
import { setAlert } from './alert';

export const types = {
  ADD_ITEM: 'ADD_ITEM',
  ADD_ITEM_ERROR: 'ADD_ITEM_ERROR',
  UPDATE_ITEM: 'UPDATE_ITEM',
  UPDATE_ITEM_ERROR: 'UPDATE_ITEM_ERROR',
  GET_ITEM: 'GET_ITEM',
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEM_ERROR: 'GET_ITEM_ERROR',
  GET_ITEMS_ERROR: 'GET_ITEMS_ERROR',
  GET_DELETE_ITEM_ERROR: 'GET_DELETE_ITEM_ERROR',
  GET_MY_ITEMS_REQUEST: 'GET_MY_ITEMS_REQUEST',
  GET_MY_ITEMS: 'GET_MY_ITEMS',
  GET_MY_ITEMS_ERROR: 'GET_MY_ITEMS_ERROR',
  GET_PROVIDER_ITEMS: 'GET_PROVIDER_ITEMS',
  GET_COLLECTOR_ITEMS: 'GET_COLLECTOR_ITEMS',
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES',
  RESERVE_ITEM: 'RESERVE_ITEM',
  RESERVE_ITEM_ERROR: 'RESERVE_ITEM_ERROR',
  UNRESERVE_ITEM: 'UNRESERVE_ITEM',
  UNRESERVE_ITEM_ERROR: 'UNRESERVE_ITEM_ERROR',
  DELETE_EXPIRED_ITEMS: 'DELETE_EXPIRED_ITEMS',
  DELETE_EXPIRED_ITEMS_ERROR: 'DELETE_EXPIRED_ITEMS_ERROR',
  SEARCH_ITEMS_REQUEST: 'SEARCH_ITEMS_REQUEST',
  SEARCH_ITEMS: 'SEARCH_ITEMS',
  SEARCH_ITEMS_ERROR: 'SEARCH_ITEMS_ERROR'
};

export const addItem = formData => async dispatch => {
  try {
    console.log(formData);
    const res = await api.post('/items', formData);
    dispatch({
      type: types.ADD_ITEM,
      payload: res.data
    });
    dispatch(setAlert('Item successfuly added.', 'success', 'alert'));
    return true;
  } catch (err) {
    console.error(err);
    dispatch({
      type: types.ADD_ITEM_ERROR
    });
    dispatch(
      setAlert('Item not added. Check fields and retry.', 'warning', 'alert')
    );
    return false;
  }
};

export const updateItem = (formData, _id) => async dispatch => {
  try {
    const res = await api.put(`/items/${_id}`, formData);
    dispatch({
      type: types.UPDATE_ITEM,
      payload: res.data
    });
    dispatch(setAlert('Item successfuly updated.', 'success', 'alert'));
    return true;
  } catch (err) {
    console.error(err);
    dispatch({
      type: types.UPDATE_ITEM_ERROR
    });
    dispatch(
      setAlert('Item not updated. Check fields and retry.', 'warning', 'alert')
    );
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
    console.error(err);
    dispatch({
      type: types.GET_ITEMS_ERROR
    });
  }
};
export const searchItems = filterOptions => async dispatch => {
  try {
    dispatch({
      type: types.SEARCH_ITEMS_REQUEST
    });
    const conversion = {
      miles: 0.00062137,
      kilometers: 1000
    };
    // console.log(filterOptions);
    const res = await api.get('items/search', {
      params: {
        maxDistance:
          filterOptions.unit === 'Miles'
            ? filterOptions.distance / conversion.miles
            : filterOptions.distance * conversion.kilometers,
        lat: filterOptions.lat,
        long: filterOptions.long,
        category: filterOptions.category.map(cat => cat.title),
        sortBy: {
          [filterOptions.sortBy]: filterOptions.sortBy === 'date' ? -1 : 1
        },
        expiry:
          filterOptions.expiry !== ''
            ? moment(filterOptions.expiry).toDate()
            : '',
        limit: filterOptions.limit,
        page: filterOptions.page
      }
    });
    if (!res.data[0].totalCount.length) {
      dispatch(
        setAlert(
          'No results found for your search criteria.',
          'warning',
          'alert'
        )
      );
    }
    dispatch({
      type: types.SEARCH_ITEMS,
      payload: res.data,
      filters: filterOptions
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: types.SEARCH_ITEMS_ERROR
    });
  }
};

export const getMyItems = () => async dispatch => {
  try {
    dispatch({
      type: types.GET_MY_ITEMS_REQUEST
    });

    const res = await api.get('/items/user_id');

    dispatch({
      type: types.GET_MY_ITEMS,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: types.GET_MY_ITEMS_ERROR
    });
  }
};

export const deleteItem = _id => async dispatch => {
  try {
    const res = await api.delete(`/items/${_id}`);

    dispatch({
      type: types.DELETEITEM,
      _id,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.GET_DELETE_ITEM_ERROR
    });
  }
};

export const sortByItem = menuItem => ({
  type: types.SORTITEM,
  menuItem
});

export const updateCollectionDates = (_id, availability) => ({
  type: types.UPDATE_COLLECTDATES,
  _id,
  availability,
  success: true
});

export const reserveItem = (_id, history) => async dispatch => {
  try {
    const res = await api.put(`/items/reserve/${_id}`);

    dispatch({
      type: types.RESERVE_ITEM,
      payload: res.data
    });
    dispatch(setAlert('Item successfuly reserved.', 'success', 'alert'));
    history.push(ROUTES.ITEM_LIST);
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.RESERVE_ITEM_ERROR
    });
  }
};

export const unreserveItem = (_id, history) => async dispatch => {
  try {
    const res = await api.put(`/items/unreserve/${_id}`);

    dispatch({
      type: types.UNRESERVE_ITEM,
      payload: res.data
    });
    dispatch(setAlert('Item successfuly unreserved.', 'success', 'alert'));
    history.push(ROUTES.ITEM_LIST);
  } catch (err) {
    dispatch({
      type: types.UNRESERVE_ITEM_ERROR
    });
  }
};

export const deleteExpiredItems = _id => async dispatch => {
  try {
    const res = await api.delete(`/items/expired/${_id}`);

    dispatch({
      type: types.DELETE_EXPIRED_ITEMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.DELETE_EXPIRED_ITEMS_ERROR
    });
  }
};
