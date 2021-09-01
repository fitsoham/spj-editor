import FilterModal from '@components/FilterModal';
import { FilterIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { assetStoreInitialState, useProductListContext } from 'store/ProductList';
import FilterSearchbar from './FilterSearchbar';
import ProductListView from './ProductListView';

const StorePanel: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false);
  const { setFilters, filter } = useProductListContext();

  const togglePanel = () => {
    setShowPanel((prevState) => !prevState);
  };

  const onApply = (filter: typeof assetStoreInitialState) => {
    setFilters(filter);
    setShowPanel(false);
  };
  return (
    <div className="store-panel relative flex flex-col h-full">
      <div className="relative h-16 py-4 px-4 flex justify-between items-center z-10">
        <p className="text-gray-900">Store</p>
        <button
          className={`p-2 rounded text-gray-900 ${showPanel ? 'bg-gray-400' : ''} hover:bg-gray-400`}
          onClick={() => setShowPanel((prev) => !prev)}
        >
          <FilterIcon className="h-4 w-4" />
        </button>
      </div>
      <FilterSearchbar />
      <div className="h-full flex-grow">
        <ProductListView />
      </div>
      {showPanel && (
        <FilterModal
          type="asset"
          onApply={onApply}
          isOpen={showPanel}
          onClose={togglePanel}
          assetFilterState={filter}
        />
      )}
    </div>
  );
};

export default StorePanel;
