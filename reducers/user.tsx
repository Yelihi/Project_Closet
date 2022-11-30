import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

const dumyUser = () => ({
  id: 1,
  NickName: '원익',
  Cloths: [
    {
      id: 1,
      productName: '자바나스 화이트코트',
      description: '실험중',
      price: 230000,
      color: '#ffffff',
      categori: 'outer',
      purchaseDay: '2019-02-10',
      Outers: [
        {
          id: 1,
          shoulder: 20,
          arm: 10,
          totalLength: 110,
          chest: 60,
        },
      ],
    },
  ],
});

interface InitialState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  me: {} | null;
}

export const initialState: InitialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  me: null,
};

export interface UserInfo {
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
