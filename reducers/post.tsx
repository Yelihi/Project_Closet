import { AnyAction } from "redux";
import produce from "immer";
import * as t from "./type";

interface InitialState {
  showDrawer: boolean;
  uploadItems: {} | null;
}

export const initialState: InitialState = {
  showDrawer: false,
  uploadItems: null,
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case t.SHOW_UPLOAD_DRAWER: {
        draft.showDrawer = !draft.showDrawer;
      }
    }
  });
};
