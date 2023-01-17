import rootReducer from '..';
import { UserInitialState } from './user';
import { PostInitialState } from './post';

export interface rootReducerType {
  index: any;
  user: UserInitialState;
  post: PostInitialState;
}

export type RootState = ReturnType<typeof rootReducer>;
