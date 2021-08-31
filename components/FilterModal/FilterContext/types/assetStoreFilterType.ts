import AssetStatus from './AssetStatusEnum';

interface StoreFilterType {
  status: AssetStatus;
  retailer: string[];
  price: number[];
  height: number[];
  width: number[];
  depth: number[];
  category: string[];
  subCategory: string[];
  verticals: string[];
  wildcard: boolean;
  preferredRetailer: boolean;
}

export default StoreFilterType;
