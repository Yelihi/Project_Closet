export interface InitialState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
  signInLoading: boolean;
  signInDone: boolean;
  signInError: string | null;
  me: {} | null;
}

export interface UserInfo {
  email: string;
  password: string;
}
