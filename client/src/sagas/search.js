import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';
import Constant from '../constants';

function* fetchImages(action) {
  console.log('Action dispatched....', action.data);
  const response = yield axios.post(`${config.url}/search`);
}

function* fetchImagesWatcher() {
  yield takeLatest(Constant.SEARCH_REQUEST_START, fetchImages);
}

export default function* rootSaga() {
  yield all([fetchImagesWatcher()]);
}
