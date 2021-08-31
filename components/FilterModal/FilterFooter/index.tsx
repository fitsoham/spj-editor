import React from 'react';
import { useFilterContext } from '../FilterContext';
import StoreFilterType from '../FilterContext/types/assetStoreFilterType';

interface FilterFooterType {
  onApply: (filter: StoreFilterType) => void;
}

const FilterFooter: React.FC<FilterFooterType> = ({ onApply }) => {
  const {
    assetStore: { filter },
  } = useFilterContext();

  const handleApply = () => {
    if (onApply) {
      onApply(filter);
    }
  };
  return (
    <div className="flex justify-end">
      <button className="px-8 py-2 rounded-lg bg-gray-900 text-sm text-white" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default FilterFooter;
