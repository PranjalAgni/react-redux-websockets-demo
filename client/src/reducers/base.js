const baseReducerState = {
  isRequesting: false,
  facts: []
};
export default (state = baseReducerState, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return {
        ...state,
        ...action.data
      };
    case 'REQUEST_DONE':
      return {
        ...state,
        ...action.data
      };
    case 'ADD_DATA':
      let oldFacts = state.facts;
      oldFacts.push(...action.data);
      //const newFacts = oldFacts.concat(action.data);
      return {
        ...state,
        facts: oldFacts
      };
    default:
      return state;
  }
};
