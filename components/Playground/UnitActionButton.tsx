import React from 'react';

const UnitActionButton: React.FC = ({ children }) => {
  return (
    <button className="rounded-full h-8 w-8 bg-gray-100 text-gray-900 flex items-center justify-center">
      {children}
    </button>
  );
};

export default UnitActionButton;
