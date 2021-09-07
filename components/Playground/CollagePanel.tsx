import { Switch } from '@headlessui/react';
import { FilterIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { useCollageListContext } from 'store/CollageList';
import ListingView from './CollageListView';

const CollagePanel: React.FC = () => {
  const {  count, isActiveCollages, setActiveCollages } = useCollageListContext();
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
        <div className="flex py-1 px-4 justify-between items-center">
        <Switch.Group>
          <div className="flex align-center justify-between items-center">
            <Switch.Label className="mr-1 text-xs">Active</Switch.Label>
            <Switch
              checked={isActiveCollages}
              onChange={setActiveCollages}
              className={`${
                isActiveCollages ? 'bg-red-500' : 'bg-gray-500'
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Active</span>
              <span
                className={`${
                  isActiveCollages ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>
        </Switch.Group>
          <span className="text-xs text-gray-600">{count} results found</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 px-1 pb-1 h-full">
        <ListingView />
      </div>
    </>
  );
};

export default CollagePanel;
