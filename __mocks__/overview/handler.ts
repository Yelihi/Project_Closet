import { rest } from 'msw';
import { OverviewResponseData } from './data';

type ResponseData = {
  lastDatas: Object;
  totalNumber: number;
  totalPrice: number;
  currentYearPrice: number;
  categori: Object;
};

export const getOverviewData = (data: ResponseData = OverviewResponseData, isfalse?: boolean) => {
  return rest.get('http://localhost:3065/posts/overview', async (req, res, ctx) => {
    if (isfalse) {
      return res(ctx.status(500));
    }

    return res(ctx.status(200), ctx.json(data));
  });
};

const overviewHandler = [getOverviewData()];

export default overviewHandler;

// state {
//   user: {
//     loadToMyInfoDone: false,
//     loadToMyInfoError: null,
//     logInLoading: false,
//     logInDone: false,
//     logInError: null,
//     logOutLoading: false,
//     logOutDone: false,
//     logOutError: null,
//     signInLoading: false,
//     signInDone: false,
//     signInError: null,
//     me: null
//   },
//   post: {
//     showDrawer: false,
//     loadItemLoding: false,
//     loadItemDone: false,
//     loadItemError: false,
//     loadItemsLoding: false,
//     loadItemsDone: false,
//     loadItemsError: false,
//     uploadItemsLoding: false,
//     uploadItemsDone: false,
//     uploadItemsError: false,
//     imageUploadLoding: false,
//     imageUploadDone: false,
//     imageUploadError: false,
//     deleteItemLoding: false,
//     deleteItemDone: false,
//     deleteItemError: false,
//     lastAddDataIndex: '',
//     user: null,
//     imagePath: [],
//     singleItem: null,
//     indexArray: [],
//     userItems: null
//   },
//   screenEvent: { isPhoneMenuClick: false, isPhoneSearchClick: false }
// }
