export const types = {
  DELETEITEM: 'DELETEITEM',
  SORTITEM: 'SORTITEM',
  UPDATE_COLLECTDATES: 'UPDATE_COLLECTDATES',
};

export const deleteItem = itemId => ({
  type: types.DELETEITEM,
  itemId,
});

export const sortByItem = menuItem => ({
  type: types.SORTITEM,
  menuItem,
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
  success: true,
});
