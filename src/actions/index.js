export const types = {
  UPDATE_MESSAGE: 'UPDATE_MESSAGE'
};

export const updateMessage = text => ({
  type: types.UPDATE_MESSAGE,
  text
});
