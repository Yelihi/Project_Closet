type ArrayLiteral<T extends ReadonlyArray<any>> = T[number];
type ObjectLiteral<T extends { [i: string]: any }> = T[keyof T];
type Literal<T> = T extends ReadonlyArray<any> ? ArrayLiteral<T> : T extends { [i: string]: any } ? ObjectLiteral<T> : never;

export const StoreHeader = [
  {
    text: 'Item Name',
    value: 'productName',
  } as const,
  {
    text: 'Item Categori',
    value: 'categori',
  } as const,
  {
    text: 'Cost',
    value: 'price',
  } as const,
  {
    text: 'Purchase Day',
    value: 'purchaseDay',
  } as const,
  {
    text: 'etc',
    value: 'etc',
  } as const,
];

const storeValue = StoreHeader.map(v => v.value);
type ValueType = typeof storeValue[number];

export type StoreHeaderType = {
  text: string;
  value: ValueType;
};

export type StoreItemsType = {
  id: number;
  productName: string;
  images: string;
  categori: string;
  price: number;
  purchaseDay: string;
  etc: number;
};

export const TestItems = [
  {
    id: 1,
    productName: '베이지 코트',
    images: 'coat_test_1678686555749.jpeg',
    categori: 'Outer',
    price: 400000,
    purchaseDay: '2022-05',
    etc: 1,
  },
  {
    id: 2,
    productName: '그레이 머플러',
    images: 'coat_test_1678686555749.jpeg',
    categori: 'Muffler',
    price: 100000,
    purchaseDay: '2022-07',
    etc: 1,
  },
  {
    id: 3,
    productName: '오랜지 블루종',
    images: 'coat_test_1678686555749.jpeg',
    categori: 'Outer',
    price: 200000,
    purchaseDay: '2022-08',
    etc: 1,
  },
  {
    id: 4,
    productName: '체크무늬 캔버스',
    images: 'coat_test_1678686555749.jpeg',
    categori: 'Shoe',
    price: 120000,
    purchaseDay: '2022-11',
    etc: 1,
  },
];

export interface ImagesPros {
  id: number;
  ClothId: number;
  src: string;
}

export interface ItemsArray {
  Images: ImagesPros[];
  UserId: number;
  categori: string;
  color: string;
  createdAt: string;
  description: string;
  id: number;
  price: number;
  productName: string;
  purchaseDay: string;
  updatedAt: string;
}

export interface UserItemsData {
  categori: string;
  categoriNum: number;
  idArray: number[];
  items: ItemsArray[];
  price: number;
  total: number;
}
