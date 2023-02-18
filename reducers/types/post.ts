export interface ImagePathObject {
  filename: string;
  visionSearch: Object[];
}

export interface PostInitialState {
  showDrawer: boolean;
  uploadItemsLoding: boolean;
  uploadItemsDone: boolean;
  uploadItemsError: boolean;
  imageUploadLoding: boolean;
  imageUploadDone: boolean;
  imageUploadError: boolean;
  user: Object[];
  imagePath: ImagePathObject[];
}
