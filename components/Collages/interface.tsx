export interface CollageListMeta {
  _id: string;
  translation: {
    x: {
      $numberDecimal: string;
    };
    y: {
      $numberDecimal: string;
    };
  };
  rotation: string;
  scale: {
    height: {
      $numberDecimal: string;
    };
    width: {
      $numberDecimal: string;
    };
  };
  id: string;
  product: string;
  imgSrc: string;
}

export interface CollagesListInterface {
  _id: string;
  description: string;
  background: string;
  isActive: boolean;
  price: number;
  name: string;
  collageId: string;
  meta: {
    view: CollageListMeta[];
  };
  categoryMap: {
    _id: string;
    category: {
      _id: string;
      name: string;
    };
    subCategory: {
      _id: string;
      name: string;
    };
    createdAt: string;
    isActive: boolean;
    updatedAt: string;
  };
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface CollagesStaticPropsInterface {
  feedData?: {
    list: CollagesListInterface[];
    count: number;
  };
  error?: string;
}
