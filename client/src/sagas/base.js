import { put, takeLatest, all } from 'redux-saga/effects';
import { requestDone, addFact } from '../actions/base';
import axios from 'axios';
import config from 'config';

function* fetchFacts(action) {
  const { limit } = action.payload;
  console.log('LIMIT: ', action.payload);
  let requestId = 0;
  let factsHolder = [];
  while (requestId < limit) {
    const response = yield axios.get(`${config.url}`);
    factsHolder.push(response.data.value);
    requestId += 1;
  }

  yield put(addFact(factsHolder));
  yield put(requestDone());
}

function* fetchFactsWatcher() {
  yield takeLatest('REQUEST_START', fetchFacts);
}

export default function* rootSaga() {
  yield all([fetchFactsWatcher()]);
}
