import Constant from '../constants';

export function requestStart(limit = 10) {
  return {
    type: Constant.REQUEST_START,
    data: {
      isRequesting: true
    },
    payload: {
      limit
    }
  };
}
export function addFact(fact) {
  return {
    type: Constant.ADD_DATA,
    data: {
      fact: fact
    }
  };
}

export function requestDone() {
  return {
    type: Constant.REQUEST_DONE,
    data: {
      isRequesting: false
    }
  };
}
