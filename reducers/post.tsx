import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

interface InitialState {
  showDrawer: boolean;
  uploadItems: {} | null;
  imageUploadLoding: boolean;
  imageUploadDone: boolean;
  imageUploadError: boolean;
  user: Object[];
}

export const initialState: InitialState = {
  showDrawer: false,
  uploadItems: null,
  imageUploadLoding: false,
  imageUploadDone: false,
  imageUploadError: false,
  user: [],
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.SHOW_UPLOAD_DRAWER: {
        draft.showDrawer = !draft.showDrawer;
        break;
      }
      case t.UPLOAD_IMAGES_REQUEST: {
        draft.imageUploadLoding = true;
        draft.imageUploadDone = false;
        draft.imageUploadError = false;
        break;
      }
      case t.UPLOAD_IMAGES_SUCCESS: {
        draft.imageUploadLoding = false;
        draft.imageUploadDone = true;
        draft.imageUploadError = false;
        draft.user.unshift(action.data);
        break;
      }
      case t.UPLOAD_IMAGES_REQUEST: {
        draft.imageUploadLoding = false;
        draft.imageUploadDone = false;
        draft.imageUploadError = action.error;
        break;
      }
    }
  });
};
