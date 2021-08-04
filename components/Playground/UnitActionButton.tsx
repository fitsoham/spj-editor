import React, { useContext } from 'react';
import { SelectedIdContext } from 'store/SelectedId';

interface UnitActionButtonInterface {
  onClick?: () => void;
}

const UnitActionButton: React.FC<UnitActionButtonInterface> = ({ children, onClick }) => {
  const [selectedId] = useContext(SelectedIdContext);
  return (
    <button
      className="rounded-full h-8 w-8 bg-gray-100 text-gray-900 flex items-center justify-center transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={selectedId === ''}
    >
      {children}
    </button>
  );
};

export default UnitActionButton;
