import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import type { PostInitialState } from './types/post';

export const initialState: PostInitialState = {
  showDrawer: false,
  uploadItemsLoding: false,
  uploadItemsDone: false,
  uploadItemsError: false,
  imageUploadLoding: false,
  imageUploadDone: false,
  imageUploadError: false,
  user: [],
  imagePath: null,
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
        draft.imagePath = action.data;
        break;
      }
      case t.UPLOAD_IMAGES_FAILURE: {
        draft.imageUploadLoding = false;
        draft.imageUploadDone = false;
        draft.imageUploadError = action.error;
        break;
      }
      case t.UPLOAD_ITEMS_REQUEST: {
        draft.uploadItemsLoding = true;
        draft.uploadItemsDone = false;
        draft.uploadItemsError = false;
        break;
      }
      case t.UPLOAD_ITEMS_SUCCESS: {
        draft.uploadItemsLoding = false;
        draft.uploadItemsDone = true;
        draft.uploadItemsError = false;
        break;
      }
      case t.UPLOAD_ITEMS_FAILURE: {
        draft.uploadItemsLoding = false;
        draft.uploadItemsDone = false;
        draft.uploadItemsError = action.error;
        break;
      }
    }
  });
};
