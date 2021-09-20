import { CollectionIcon, EyeIcon, PuzzleIcon, ShoppingCartIcon, UploadIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { NavSelectContext } from 'store/NavSelect';

const SideNav: React.FC = () => {
  const [nav, setNav] = useContext(NavSelectContext);
  return (
    <>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-200 ${
          nav === 'collages' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('collages')}
      >
        <CollectionIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-200 ${
          nav === 'store' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('store')}
      >
        <PuzzleIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-400 ${
          nav === 'pinterest' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('pinterest')}
      >
        <span className="sr-only">Pinterest</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <line
            x1="120"
            y1="88.00002"
            x2="88"
            y2="224.00002"
            fill="none"
            stroke={`${nav === 'pinterest' ? '#ffffff' : '#000000'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
            fill="none"
            stroke={`${nav === 'pinterest' ? '#ffffff' : '#000000'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-200 ${
          nav === 'upload' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('upload')}
      >
        <UploadIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-200 ${
          nav === 'shop' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('shop')}
      >
        <ShoppingCartIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-200 ${
          nav === 'recommendations' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('recommendations')}
      >
        <EyeIcon className="w-4 h-4" />
      </button>
    </>
  );
};

export default React.memo(SideNav);
