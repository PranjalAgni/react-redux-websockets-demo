import Constant from '../constants';

const initialState = {
  loading: false,
  images: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.SEARCH_REQUEST_START:
      return Object.assign({}, state, action.data);

    case Constant.SEARCH_REQUEST_DONE:
      return Object.assign({}, state, action.data);

    case Constant.SEARCH_ADD_IMAGES:
      const newImages = [...state.images, ...action.data.images];
      return Object.assign({}, state, {
        images: newImages
      });
    default:
      return state;
  }
};

export default reducer;
