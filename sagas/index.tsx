import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import postSage from './post';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSage)]);
}
