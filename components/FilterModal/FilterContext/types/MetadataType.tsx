export interface Themes {
  _id: string;
  name: string;
  description?: string;
}

export interface VerticalsList {
  _id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  isActive: boolean;
  mountType: string;
}

export interface SubcategoryList {
  _id: string;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  verticals: VerticalsList[];
}
export interface CategoriesList {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  subCategories: SubcategoryList[];
}

export interface RetailersList {
  country: string;
  _id: string;
  name: string;
}

export interface MetaDataType {
  retailers: {
    list: RetailersList[];
    count: number;
  };
  categoryTree: CategoriesList[];
  themes: {
    list: Themes[];
    count: number;
  };
  designImgTypes: string[];
  cdnPrefix: string;
}

export interface MetaTreeMap {
  category?: string;
  removeList?: string[];
  subCategory?: string;
  key: string;
  name: string;
  type: string;
  selected: boolean;
  children?: Array<MetaTreeMap>;
}
