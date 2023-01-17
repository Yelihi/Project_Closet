export interface InitialState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: string | null;
  signInLoading: boolean;
  signInDone: boolean;
  signInError: string | null;
  me: {} | null;
}

export interface UserInfo {
  email: string;
  password: string;
}

export interface UserSignUp {
  email: string;
  nickname: string;
  password: string;
  src: string;
}
