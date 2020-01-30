import Constant from '../constants';
import { createReducers } from '../utils';
const baseReducerState = {
  isRequesting: false,
  facts: []
};

const reducer = (state = baseReducerState, action) => {
  switch (action.type) {
    case Constant.REQUEST_START:
      return Object.assign({}, state, action.data);
    case Constant.REQUEST_DONE:
      return Object.assign({}, state, action.data);

    case Constant.ADD_DATA:
      const newFacts = [...state.facts, ...action.data.fact];
      return Object.assign({}, state, {
        facts: newFacts
      });

    default:
      return state;
  }
};
// export default createReducers(baseReducerState, {
//   [Constant.REQUEST_START]: (state, action) => {
//     return Object.assign(state, action.data);
//   },
//   [Constant.REQUEST_DONE]: (state, action) => {
//     return Object.assign(state, action.data);
//   },
//   [Constant.ADD_DATA]: (state, action) => {
//     const newFacts = [...state.facts, ...action.data.fact];
//     return Object.assign(state, {
//       facts: action.data.fact,
//       done: true
//     });
//   }
// });

export default reducer;
