export const types = {
  USER_LOADED: 'USER_LOADED',
  USER_LOAD_FAILURE: 'USER_LOAD_FAILURE'
};

export const userLoaded = user => ({
  type: types.USER_LOADED,
  user
});

export const userLoadError = () => ({
  type: types.USER_LOAD_FAILURE
});
