import { put, takeLatest, all } from 'redux-saga/effects';
import { requestDone, addFact } from '../actions/facts';
import axios from 'axios';
import config from 'config';
import Constant from '../constants';

function* fetchFacts(action) {
  const { limit } = action.payload;

  let requestId = 0;
  let factsHolder = [];

  while (requestId < limit) {
    const response = yield axios.get(`${config.url}/facts`);
    factsHolder.push(response.data);
    requestId += 1;
  }

  yield put(addFact(factsHolder));
  yield put(requestDone());
}

function* fetchFactsWatcher() {
  yield takeLatest(Constant.REQUEST_START, fetchFacts);
}

export default function* rootSaga() {
  yield all([fetchFactsWatcher()]);
}
