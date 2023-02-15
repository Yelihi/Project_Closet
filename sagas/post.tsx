import { AnyAction } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import * as t from '../reducers/type';

// reducers
import { UserInfo } from '../reducers/types/user';

interface Success {
  data: Object;
  status: number;
  statusText: string;
  headers: any;
  config: Object;
  request: any;
}

function uploadImageAPI(data: Iterable<[PropertyKey, Object]>) {
  return axios.post('/post/images', data);
}

function* uploadImage(action: AnyAction) {
  try {
    console.log('saga imageUpload');
    const result: AxiosResponse<Success> = yield call(uploadImageAPI, action.data);
    yield put({
      type: t.UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    console.log(err);
    yield put({
      type: t.UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadItemsAPI(data: Iterable<[PropertyKey, Object]>) {
  return axios.post('/post/clothes', data);
}

function* uploadItems(action: AnyAction) {
  try {
    console.log('saga imageUpload');
    const result: AxiosResponse<Success> = yield call(uploadItemsAPI, action.data);
    yield put({
      type: t.UPLOAD_ITEMS_SUCCESS,
      data: action.data.name,
    });
  } catch (err: any) {
    console.log(err);
    yield put({
      type: t.UPLOAD_ITEMS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchImageUpload() {
  yield takeLatest(t.UPLOAD_IMAGES_REQUEST, uploadImage);
}

function* watchItemsUpload() {
  yield takeLatest(t.UPLOAD_ITEMS_REQUEST, uploadItems);
}

export default function* postSaga() {
  yield all([fork(watchImageUpload), fork(watchItemsUpload)]);
}
