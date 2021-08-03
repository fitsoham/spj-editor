import { CollectionIcon, PuzzleIcon, ShoppingBagIcon, UploadIcon } from '@heroicons/react/outline';
import React from 'react';

const SideNav: React.FC = () => {
  return (
    <div>
      <div className="bg-white w-16">
        <button className="w-16 h-16 flex justify-center items-center transition bg-gray-900 text-white">
          <PuzzleIcon className="w-4 h-4" />
        </button>
        <button className="w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white">
          <CollectionIcon className="w-4 h-4" />
        </button>
        <button className="w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white">
          <UploadIcon className="w-4 h-4" />
        </button>
        <button className="w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white">
          <ShoppingBagIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SideNav;
