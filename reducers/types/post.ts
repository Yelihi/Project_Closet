export interface VisionSearch {
  name: string;
  confidence: number;
}

export interface ImagePathObject {
  filename: string;
  visionSearch: VisionSearch[];
}

export interface User {
  id: number;
  productName: string;
  description: string;
  price: number;
  color: string;
  categori: string;
  purchaseDay: string;
  createAt: string;
  updatedAt: string;
  UserId: number;
}

export interface PostInitialState {
  showDrawer: boolean;
  loadItemLoding: boolean;
  loadItemDone: boolean;
  loadItemError: boolean;
  uploadItemsLoding: boolean;
  uploadItemsDone: boolean;
  uploadItemsError: boolean;
  imageUploadLoding: boolean;
  imageUploadDone: boolean;
  imageUploadError: boolean;
  lastAddDataIndex: number | '';
  user: User | null;
  imagePath: ImagePathObject[];
  singleItem: null | Object;
}
