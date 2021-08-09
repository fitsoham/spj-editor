import { FilterIcon, SearchIcon } from '@heroicons/react/outline';
import CollageList from '@mocks/CollageList';
import React from 'react';
import { Tween } from 'react-gsap';
import CollageCard from './CollageCard';

const CollagePanel: React.FC = () => {
  return (
    <>
      <div className="h-16 p-4 flex justify-between items-center">
        <p className="">Collages</p>
        <FilterIcon className="h-4 w-4" />
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
          <span className="text-xs text-gray-600">5 results found</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 px-1 pb-1">
        <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} duration={1} ease="back.out(1.7)" stagger={0.2}>
          {CollageList.map((collage) => (
            <div key={collage.id}>
              <CollageCard collage={collage} />
            </div>
          ))}
        </Tween>
      </div>
    </>
  );
};

export default CollagePanel;
