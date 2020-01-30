import { combineReducers } from 'redux';
import factsReducer from './facts';
import searchReducer from './search';

export default combineReducers({
  facts: factsReducer,
  search: searchReducer
});
