import { ChatIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const MoreActions: React.FC = () => {
  return (
    <div className="bg-gray-100 w-20 p-4 flex-col space-y-2">
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <button className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center">
          <ChatIcon className="h-4 w-4" />
        </button>
        <button className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center">
          <SearchIcon className="h-4 w-4" />
        </button>
        <button className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center">
          <SearchIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <button className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center">
          <ChatIcon className="h-4 w-4" />
        </button>
        <button className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center">
          <SearchIcon className="h-4 w-4" />
        </button>
        <button className="rounded-full h-8 w-8 bg-gray-100 flex items-center justify-center">
          <SearchIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MoreActions;
