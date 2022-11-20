import { AnyAction } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as t from '../reducers/type';

import { UserInfo } from '../reducers/user';

interface LoginSuccess {
  data: Object;
  status: number;
  statusText: string;
  headers: any;
  config: Object;
  request: any;
}

function logInAPI(data: UserInfo) {
  return axios.post('/user/login', data);
}

function* logIn(action: AnyAction) {
  try {
    console.log('saga logIn');
    const result: AxiosResponse<LoginSuccess> = yield call(
      logInAPI,
      action.data
    );
    yield put({
      type: t.LOGIN_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.log(err);
    yield put({
      type: t.LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(t.LOGIN_REQUEST, logIn);
}

export default function* userSaga() {
  yield all([fork(watchLogIn)]);
}
