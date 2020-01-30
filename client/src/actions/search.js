import Constant from '../constants';

export function searchRequestStart(searchValue) {
  return {
    type: Constant.SEARCH_REQUEST_START,
    data: {
      searchTerm: searchValue,
      loading: true
    }
  };
}

export function updateSearchTerm(searchValue) {
  return {
    type: Constant.SEARCH_UPDATE_VALUE,
    data: {
      searchTerm: searchValue
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

export function searchRequestDone() {
  return {
    type: Constant.SEARCH_REQUEST_DONE,
    data: {
      loading: false
    }
  };
}
