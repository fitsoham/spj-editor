import React from 'react';

const DesignCardDimmer: React.FC = () => {
  return (
    <div className="h-64 animate-pulse">
      <div className="h-3/4 bg-gray-200" />
      <div className="space-y-2 pt-4">
        <div className="h-4 bg-gray-200 rounded-xs" />
        <div className="h-4 bg-gray-200 rounded-xs w-5/6" />
      </div>
    </div>
  );
};

export default React.memo(DesignCardDimmer);