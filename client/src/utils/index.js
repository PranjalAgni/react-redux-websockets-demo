export const createReducers = (initalState, handlers) => (
  state = initalState,
  action
) => {
  console.log('createReducers() called with: ', action);
  if (action.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
