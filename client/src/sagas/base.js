import { all, fork } from 'redux-saga/effects';
import factSagas from './facts';
import searchSagas from './search';

function* base() {
  yield all([fork(factSagas), fork(searchSagas)]);
}

export default base;
