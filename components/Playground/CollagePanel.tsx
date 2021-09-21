import React from 'react';
import { useCollageListContext } from 'store/CollageList';
import ListingView from './CollageListView';

const CollagePanel: React.FC = () => {
  const { count, collageCategories, updateCategorySelections } = useCollageListContext();
  return (
    <div className="store-panel relative flex flex-col h-full">
      <div className="relative h-12 py-4 px-4 flex justify-between items-center z-10">
        <p className="text-gray-900">Design Sets</p>
        <span className="text-xs text-gray-600">{count} results found</span>
      </div>
      <div className="py-2 px-1 flex overflow-scroll no-scrollbar">
        {collageCategories.map((item, index) => {
          return (
            <span
              className={`rounded-full border border-gray-400 py-2 px-4 bg-white text-gray-500 text-xs capitalize flex items-center whitespace-nowrap cursor-pointer ${
                index !== 0 ? 'ml-2' : ''
              } hover:text-red-500 ${item?.selected ? 'text-red-500 border-red-500' : ''}`}
              key={item?._id}
              onClick={() => updateCategorySelections(item?._id)}
            >
              {item?.name}
            </span>
          );
        })}
      </div>
      <div className="h-full flex-grow px-1">
        <ListingView />
      </div>
    </div>
  );
};

export default CollagePanel;
