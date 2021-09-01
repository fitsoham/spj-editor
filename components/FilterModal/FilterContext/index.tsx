import useMetadata from '@components/Playground/StorePanel/hooks/useMetadata';
import React, { useMemo, useState } from 'react';
import InitialStates from '../constants/filterInitialStates';
import FilterContextType from './types';
import StoreFilterType from './types/assetStoreFilterType';
import { MetaDataType, MetaTreeMap } from './types/MetadataType';

const FilterContext = React.createContext<FilterContextType>({
  assetStore: {
    filter: InitialStates.store,
    changeFilter: () => {
      return;
    },
    reset: () => {
      return;
    },
  },
  design: {},
  categoryMap: [],
  retailerMap: [],
});

interface FilterContextProviderType {
  assetFilterState?: StoreFilterType;
  designFilterState?: any;
}

const FilterContextProvider: React.FC<FilterContextProviderType> = ({ children, assetFilterState }) => {
  const { meta } = useMetadata();
  const [assetFilter, setAssetFilters] = useState(assetFilterState || InitialStates.store);

  const resetAssetFilter = () => {
    setAssetFilters(InitialStates.store);
  };

  const changeAssetFilter = (changedValue: Partial<StoreFilterType>) => {
    setAssetFilters({
      ...assetFilter,
      ...changedValue,
    });
  };

  const categoryMap: MetaTreeMap[] = useMemo(() => {
    if (meta) {
      return (meta as MetaDataType)?.categoryTree.map((category) => {
        return {
          key: category?._id,
          type: 'category',
          name: category?.name,
          selected: assetFilter?.category?.indexOf(category?.name) > -1,
          removeList: ['subCategory', 'verticals', 'category'],
          children: category?.subCategories?.map((subCategory) => {
            return {
              key: subCategory?._id,
              type: 'subCategory',
              name: subCategory?.name,
              selected: assetFilter?.subCategory?.indexOf(subCategory?.name) > -1,
              removeList: ['subCategory', 'verticals'],

              children: subCategory?.verticals?.map((vertical) => {
                return {
                  key: vertical?._id,
                  name: vertical?.name,
                  selected: assetFilter?.verticals?.indexOf(vertical?.name) > -1,
                  type: 'verticals',
                  removeList: ['verticals'],
                };
              }),
            };
          }),
        };
      });
    } else return [];
  }, [meta, assetFilter]);

  const retailerMap: MetaTreeMap[] = useMemo(() => {
    if (meta)
      return (meta as MetaDataType)?.retailers?.list.map((retailer) => {
        return {
          key: retailer?._id,
          type: 'retailer',
          name: retailer?.name,
          selected: assetFilter?.retailer?.indexOf(retailer?.name) > -1,
        };
      });
    else return [];
  }, [meta, assetFilter]);

  return (
    <FilterContext.Provider
      value={{
        assetStore: { filter: assetFilter, changeFilter: changeAssetFilter, reset: resetAssetFilter },
        design: {},
        categoryMap,
        retailerMap,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = (): FilterContextType => {
  return React.useContext(FilterContext);
};

export default FilterContextProvider;
