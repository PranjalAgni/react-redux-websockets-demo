import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';
import Constant from '../constants';
import { addImages, searchRequestDone } from '../actions/search';

function* fetchImages(action) {
  try {
    const { searchTerm } = action.data;
    const response = yield axios.post(`${config.url}/search`, {
      data: {
        search: searchTerm
      }
    });

    yield put(
      addImages({
        key: searchTerm,
        images: response.data.data
      })
    );
    yield put(searchRequestDone());
  } catch {
    yield put(searchRequestDone());
  }
}

function* fetchImagesWatcher() {
  yield takeLatest(Constant.SEARCH_REQUEST_START, fetchImages);
}

export default function* rootSaga() {
  yield all([fetchImagesWatcher()]);
}
