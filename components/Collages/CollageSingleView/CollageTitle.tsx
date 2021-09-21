import { CashIcon } from '@heroicons/react/outline';
import React, { useMemo } from 'react';
import { CollagesListInterface } from '../interface';

const CollageTitle: React.FC<{
  collageData: CollagesListInterface;
}> = ({ collageData }) => {
  const correctedName = useMemo(() => {
    return collageData.name.split('-').join(' ').slice(0, -10);
  }, [collageData]);
  return (
    <div className="sticky top-0 pb-6 pt-20 bg-white z-10 ">
      <h1 className="text-3xl tracking-tight capitalize">{correctedName}</h1>
      <p className="text-sm text-gray-400 flex items-center">
        <CashIcon className="w-4 h-4 mr-1" /> Cost: ${collageData?.price?.toFixed(2)}
      </p>
    </div>
  );
};

export default CollageTitle;
