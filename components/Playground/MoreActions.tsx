import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import UnitActionButton from './UnitActionButton';

const MoreActions: React.FC = () => {
  return (
    <div className="bg-gray-100 w-20 p-4 flex-col space-y-2">
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <UnitActionButton>
          <SearchIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <SearchIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <SearchIcon className="h-4 w-4" />
        </UnitActionButton>
      </div>
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <UnitActionButton>
          <SearchIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <SearchIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <SearchIcon className="h-4 w-4" />
        </UnitActionButton>
      </div>
    </div>
  );
};

export default MoreActions;
