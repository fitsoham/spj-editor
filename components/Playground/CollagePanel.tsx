import { Switch } from '@headlessui/react';
import React from 'react';
import { useCollageListContext } from 'store/CollageList';
import ListingView from './CollageListView';

const CollagePanel: React.FC = () => {
  const { count, isActiveCollages, setActiveCollages } = useCollageListContext();
  return (
    <div className="store-panel relative flex flex-col h-full">
      <div className="relative h-16 py-4 px-4 flex justify-between items-center z-10">
        <p className="text-gray-900">Collages</p>
      </div>
      <div className="flex py-1 px-4 justify-between items-center">
          <Switch.Group>
            <div className="flex align-center justify-between items-center">
              <Switch
                checked={isActiveCollages}
                onChange={setActiveCollages}
                className={`${
                  isActiveCollages ? 'bg-red-500' : 'bg-gray-500'
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">Published</span>
                <span
                  className={`${
                    isActiveCollages ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
              <Switch.Label className="ml-2 text-xs">Published</Switch.Label>
            </div>
          </Switch.Group>
          <span className="text-xs text-gray-600">{count} results found</span>
        </div>
      <div className="h-full flex-grow px-1">
        <ListingView />
      </div>
      
    </div>
  );
};

export default CollagePanel;
