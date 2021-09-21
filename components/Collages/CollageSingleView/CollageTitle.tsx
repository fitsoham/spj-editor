import { CashIcon } from '@heroicons/react/outline';
import React from 'react';

const CollageTitle = ({ collageData }) => {
  return (
    <div className="sticky top-0 pb-6 pt-20 bg-white z-10 ">
      <h1 className="text-3xl tracking-tight capitalize">{collageData?.name}</h1>
      <p className="text-sm text-gray-400 flex items-center">
        <CashIcon className="w-4 h-4 mr-1" /> Budget: ${collageData?.price?.toFixed(2)}
      </p>
    </div>
  );
};

export default CollageTitle;
