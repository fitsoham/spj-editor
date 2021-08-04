import React from 'react';

interface UnitActionButtonInterface {
  onClick?: () => void;
  disabled?: boolean;
}

const UnitActionButton: React.FC<UnitActionButtonInterface> = ({ children, onClick, disabled }) => {
  return (
    <button
      className="rounded-full h-8 w-8 bg-gray-100 text-gray-900 flex items-center justify-center transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default UnitActionButton;
