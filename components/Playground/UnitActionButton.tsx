import React from 'react';

interface UnitActionButtonInterface {
  onClick?: () => void;
}

const UnitActionButton: React.FC<UnitActionButtonInterface> = ({ children, onClick }) => {
  return (
    <button
      className="rounded-full h-8 w-8 bg-gray-100 text-gray-900 flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default UnitActionButton;
