export function requestStart(limit = 10) {
  return {
    type: 'REQUEST_START',
    data: {
      isRequesting: true
    },
    payload: {
      limit
    }
  };
}
export function addFact(data) {
  return {
    type: 'ADD_DATA',
    data
  };
}

export function requestDone() {
  return {
    type: 'REQUEST_DONE',
    data: {
      isRequesting: false
    }
  };
}
