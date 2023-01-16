import { AnyAction } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as t from '../reducers/type';

// reducer
import { UserInfo } from '../reducers/types/user';

// saga
import { IResult } from './types/user';

function logInAPI(data: UserInfo) {
  return axios.post('/users/login', data);
}

function* logIn(action: AnyAction) {
  try {
    console.log('saga logIn');
    const result: AxiosResponse<IResult> = yield call(logInAPI, action.data);
    yield put({
      type: t.LOGIN_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.LOGIN_FAILURE,
      error: axios.isAxiosError(err) ? err.response?.data : err.response.data,
    });
  }
}

function signInAPI(data: UserInfo) {
  return axios.post('/users/create', data);
}

function* signIn(action: AnyAction) {
  try {
    console.log('saga signIn');
    const result: AxiosResponse<IResult> = yield call(signInAPI, action.data);
    yield put({
      type: t.SIGNIN_SUCCESE,
      data: result.data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: t.SIGNIN_FAILURE,
      error: axios.isAxiosError(err) ? err.response?.data : err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(t.LOGIN_REQUEST, logIn);
}

function* watchSignIn() {
  yield takeLatest(t.SIGNIN_REQUEST, signIn);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchSignIn)]);
}
