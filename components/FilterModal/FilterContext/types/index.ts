import StoreFilterType from './assetStoreFilterType';
import { MetaTreeMap } from './MetadataType';

interface FilterContextType {
  assetStore: {
    filter: StoreFilterType;
    changeFilter: (changeValues: Partial<StoreFilterType>) => void;
    reset: () => void;
  };
  design: Record<string, string>;
  categoryMap: MetaTreeMap[];
  retailerMap: MetaTreeMap[];
}

export default FilterContextType;
