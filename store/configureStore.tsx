import {
  applyMiddleware,
  createStore,
  compose,
  Middleware,
  StoreEnhancer,
  AnyAction,
  Store,
} from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer, { ReducerType } from '../reducers/';

const configureStore: MakeStore<Store<ReducerType, AnyAction>> = () => {
  const middlewares: Middleware[] = [];
  const enhancer: StoreEnhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
