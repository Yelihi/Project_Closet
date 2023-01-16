import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import Router from 'next/router';

import { InitialState, UserInfo } from './types/user';

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

export const initialState: InitialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  signInLoading: false,
  signInDone: false,
  signInError: null,
  me: null,
};

export const loginRequestAction = (data: UserInfo) => {
  return {
    type: t.LOGIN_REQUEST,
    data,
  };
};

export const signinRequestAction = (data: UserInfo) => {
  return {
    type: t.SIGNIN_REQUEST,
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
        break;
      }
      case t.LOGIN_SUCCESE: {
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = null;
        draft.me = action.data;
        alert(action.data.message);
        localStorage.setItem('Token', action.data.token);
        Router.push('/closet');
        break;
      }
      case t.LOGIN_FAILURE: {
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        alert(action.error.details);
        break;
      }
      case t.SIGNIN_REQUEST: {
        draft.signInLoading = true;
        draft.signInDone = false;
        draft.signInError = null;
        break;
      }
      case t.SIGNIN_SUCCESE: {
        draft.signInLoading = false;
        draft.signInDone = true;
        draft.signInError = null;
        draft.me = action.data;
        alert(action.data.message);
        break;
      }
      case t.SIGNIN_FAILURE: {
        draft.signInLoading = false;
        draft.signInDone = false;
        draft.signInError = action.error;
        alert(action.error.details);
        break;
      }
    }
  });
};
