import AssetStatus from '../FilterContext/types/AssetStatusEnum';
import StoreFilterType from '../FilterContext/types/assetStoreFilterType';

const StoreFilterInitialState: StoreFilterType = {
  status: AssetStatus.Active,
  retailer: [],
  price: [0, 5000],
  height: [0, 360],
  width: [0, 360],
  depth: [0, 360],
  wildcard: false,
  category: [],
  subCategory: [],
  verticals: [],
  preferredRetailer: true,
};

const DesignFilterInitialState = {};

const InitialStates = {
  store: StoreFilterInitialState,
  design: DesignFilterInitialState,
};

export default InitialStates;
