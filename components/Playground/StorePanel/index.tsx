import { FilterIcon, SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Tween } from 'react-gsap';
import FilterSidebar from './FilterSidebar';
import ProductListView from './ProductListView';

const StorePanel: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="store-panel relative flex flex-col h-full">
      <div className="relative h-16 p-4 flex justify-between items-center bg-white z-10">
        <p className="">Store</p>
        <button
          className={`p-2 rounded ${showPanel ? 'bg-gray-400' : 'bg-white'} hover:bg-gray-200`}
          onClick={() => setShowPanel((prev) => !prev)}
        >
          <FilterIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="sticky top-0 z-10 bg-gray-200">
        <div className="relative">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search"
            className="text-sm py-3 pr-10 bg-gray-50 outline-none block w-full caret-yellow-500 focus:ring-transparent border-none capitalize"
          />
          <button className="absolute inset-y-0 right-0 px-3">
            <SearchIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="text-right py-1 px-4">
          <span className="text-xs text-gray-600">1293 results found</span>
        </div>
      </div>
      <div className="h-full flex-grow">
        <ProductListView />
      </div>
      {showPanel && (
        <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} duration={0.5} ease="back.out(1.7)">
          <FilterSidebar />
        </Tween>
      )}
    </div>
  );
};

export default StorePanel;