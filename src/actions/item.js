export const types = {
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES',
  RESERVE_ITEM: 'RESERVE_ITEM',
  UNRESERVE_ITEM: 'UNRESERVE_ITEM',
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
