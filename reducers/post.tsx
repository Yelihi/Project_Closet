import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import type { PostInitialState } from './types/post';

export const initialState: PostInitialState = {
  showDrawer: false,
  loadItemLoding: false,
  loadItemDone: false,
  loadItemError: false,
  uploadItemsLoding: false,
  uploadItemsDone: false,
  uploadItemsError: false,
  imageUploadLoding: false,
  imageUploadDone: false,
  imageUploadError: false,
  lastAddDataIndex: '',
  user: null,
  imagePath: [],
  singleItem: null,
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.SHOW_UPLOAD_DRAWER: {
        draft.showDrawer = !draft.showDrawer;
        break;
      }
      case t.REMOVE_IMAGE: {
        draft.imagePath = draft.imagePath.filter((v, i) => i !== action.data);
        break;
      }
      case t.RESET_UPLOAD_PAGE: {
        draft.uploadItemsDone = false;
        break;
      }
      case t.PATCH_ITEM_REQUEST: {
        draft.uploadItemsLoding = true;
        draft.uploadItemsDone = false;
        draft.uploadItemsError = false;
        break;
      }
      case t.PATCH_ITEM_SUCCESS: {
        draft.uploadItemsLoding = false;
        draft.uploadItemsDone = true;
        draft.uploadItemsError = false;
        break;
      }
      case t.PATCH_ITEM_FAILURE: {
        draft.uploadItemsLoding = false;
        draft.uploadItemsDone = false;
        draft.uploadItemsError = action.error;
        break;
      }
      case t.LOAD_ITEM_REQUEST: {
        draft.loadItemLoding = true;
        draft.loadItemDone = false;
        draft.loadItemError = false;
        break;
      }
      case t.LOAD_ITEM_SUCCESS: {
        draft.loadItemLoding = false;
        draft.loadItemDone = true;
        draft.loadItemError = false;
        draft.singleItem = action.data;
        break;
      }
      case t.LOAD_ITEM_FAILURE: {
        draft.loadItemLoding = false;
        draft.loadItemDone = false;
        draft.loadItemError = action.error;
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
        draft.imagePath.push(action.data);
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
        draft.user = action.data;
        draft.lastAddDataIndex = action.data.id;
        draft.imagePath = [];
        alert('저장되었습니다.');
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
