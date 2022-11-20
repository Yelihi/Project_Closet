import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

interface InitialState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: boolean | null;
  me: {} | null;
}

export const initialState: InitialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  me: null,
};

interface UserInfo {
  email: string;
  password: string;
}

export const loginRequestAction = (data: UserInfo) => {
  return {
    type: t.LOGIN_REQUEST,
    data,
  };
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.LOGIN_REQUEST: {
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
      }
      case t.LOGIN_SUCCESE: {
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = null;
        draft.me = action.data;
      }
      case t.LOGIN_FAILURE: {
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
      }
    }
  });
};
