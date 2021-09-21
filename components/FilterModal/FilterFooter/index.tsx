import React, { useMemo } from 'react';
import { useFilterContext } from '../FilterContext';
import StoreFilterType from '../FilterContext/types/assetStoreFilterType';

interface FilterFooterType {
  onApply: (filter: StoreFilterType) => void;
}

const FilterFooter: React.FC<FilterFooterType> = ({ onApply }) => {
  const {
    assetStore: { filter, reset },
  } = useFilterContext();

  const handleApply = () => {
    if (onApply) {
      onApply(filter);
    }
  };

  const isFilterApplied = useMemo(() => {
    return (
      filter?.subCategory.length > 0 ||
      filter?.category.length > 0 ||
      filter.verticals.length > 0 ||
      filter.price[0] !== 0 ||
      filter.price[1] !== 5000 ||
      filter?.retailer?.length > 0
    );
  }, [filter]);

  return (
    <div className="flex justify-between">
      <div>
        {isFilterApplied && (
          <button className=" py-2 rounded-lg text-sm hover:text-red-500 focus:text-red-500" onClick={reset}>
            Clear
          </button>
        )}
      </div>
      <button className="px-8 py-2 rounded-lg bg-gray-900 text-sm text-white" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default FilterFooter;
