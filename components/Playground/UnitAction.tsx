import React from 'react';

interface UnitActionInterface {
  onClick?: () => void;
  disabled?: boolean;
  title: string;
}

const UnitAction: React.FC<UnitActionInterface> = ({ children, onClick, disabled, title }) => {
  if (onClick) {
    return (
      <div className="relative group">
        {title && (
          <span className="inline-block absolute right-10 top-1 text-white text-xs bg-gray-900 rounded px-2 py-1 z-50 transition translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
            {title}
            <span className="absolute top-1 -right-px bg-gray-900 h-2 w-2 transform rotate-45" />
          </span>
        )}
        <button
          className="rounded-full h-8 px-2 bg-gray-100 text-gray-900 flex items-center justify-center transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed"
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </div>
    );
  }
  return (
    <div className="rounded-full h-8 px-4 bg-gray-100 text-gray-900 flex items-center justify-center">{children}</div>
  );
};

export default UnitAction;
