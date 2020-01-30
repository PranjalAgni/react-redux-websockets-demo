import Constant from '../constants';

export function serachRequestStart(searchValue) {
  return {
    type: Constant.SEARCH_REQUEST_START,
    data: {
      search: searchValue,
      loading: true
    }
  };
}
export function addImages(images) {
  return {
    type: Constant.SEARCH_ADD_IMAGES,
    data: {
      images
    }
  };
}

export function serachRequestDone() {
  return {
    type: Constant.SEARCH_REQUEST_DONE,
    data: {
      loading: false
    }
  };
}
