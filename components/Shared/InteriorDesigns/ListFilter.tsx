import { FilterIcon, ViewBoardsIcon } from '@heroicons/react/outline';
import React from 'react';

const ListFilter: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="sticky top-24 flex items-center">
          <div className="flex-1">
            <p className="text-gray-500">10,000+ Designs</p>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Interior Design Ideas
            </h1>
          </div>
          <div className="text-right flex-1">
            <button
              type="button"
              className="focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full hover:shadow-md border border-gray-200"
            >
              <FilterIcon className="inline w-4 h-4" />
            </button>
            <button
              type="button"
              className="focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full hover:shadow-md border border-gray-200"
            >
              <ViewBoardsIcon className="inline w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default ListFilter;
