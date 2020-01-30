import Constant from '../constants';

const initialState = {
  loading: false,
  database: [],
  searchTerm: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.SEARCH_REQUEST_START:
      return Object.assign({}, state, action.data);

    case Constant.SEARCH_REQUEST_DONE:
      return Object.assign({}, state, action.data);

    case Constant.SEARCH_ADD_IMAGES:
      const databaseWithNewImage = [...state.database, action.data.images];
      return Object.assign({}, state, {
        database: databaseWithNewImage
      });
    case Constant.SEARCH_UPDATE_VALUE:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

export default reducer;
