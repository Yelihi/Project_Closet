// defaultResponseData
export const OverviewResponseData = {
  lastDatas: [
    {
      id: 111,
      productName: '오랜지블루종',
      description: '오렌지 불루종',
      price: 250000,
      color: '#ea601f',
      categori: 'Outer',
      purchaseDay: '2023-05-01T00:00:00.000Z',
      preference: 5,
      createdAt: '2023-05-08T02:05:22.000Z',
      updatedAt: '2023-05-08T02:05:40.000Z',
      UserId: 1,
      Images: [
        {
          id: 117,
          ClothId: 111,
          src: 'outwear_test3_1683511517047.jpg',
        },
      ],
    },
    {
      id: 110,
      productName: '스크롤실험2',
      description: '스크롤실험2',
      price: 300000,
      color: '#f9b8be',
      categori: 'Shoe',
      purchaseDay: '2023-05-01T00:00:00.000Z',
      preference: 5,
      createdAt: '2023-05-04T09:18:48.000Z',
      updatedAt: '2023-05-04T09:18:48.000Z',
      UserId: 1,
      Images: [
        {
          id: 116,
          ClothId: 110,
          src: 'shoes_test_1683191925221.jpg',
        },
      ],
    },
  ],
  totalNumber: 20,
  totalPrice: 4200000,
  currentYearPrice: 3800000,
  theOldestData: {
    id: 19,
    productName: '브라운 더블 코트',
    description: '오버핏 브라운 더플 코트입니다. 울과 캐시미어 혼용이며 캐시미어가 10퍼 혼용되어있어 부드러운 촉감을 준다. 자주 입는 코트',
    price: 400000,
    color: '#664032',
    categori: 'Outer',
    purchaseDay: '2021-12-01T00:00:00.000Z',
    preference: 0,
    createdAt: '2023-03-13T06:18:17.000Z',
    updatedAt: '2023-03-13T06:18:17.000Z',
    UserId: 1,
    Images: [
      {
        id: 25,
        ClothId: 19,
        src: 'coat_test2_1678688295395.jpeg',
      },
    ],
  },
  categori: {
    Outer: 11,
    Shoe: 6,
    Muffler: 3,
  },
};

// emptyResponseData
export const OverviewResponseEmptyData = {
  lastDatas: [],
  totalNumber: 0,
  totalPrice: 0,
  currentYearPrice: 0,
  categori: {},
};
