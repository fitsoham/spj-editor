import { CollectionIcon, PuzzleIcon, ShoppingBagIcon, UploadIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { NavSelectContext } from 'store/NavSelect';

const SideNav: React.FC = () => {
  const [nav, setNav] = useContext(NavSelectContext);
  return (
    <>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white ${
          nav === 'store' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('store')}
      >
        <PuzzleIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white ${
          nav === 'collages' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('collages')}
      >
        <CollectionIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white ${
          nav === 'upload' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('upload')}
      >
        <UploadIcon className="w-4 h-4" />
      </button>
      <button
        className={`w-16 h-16 flex justify-center items-center transition hover:bg-gray-900 hover:text-white ${
          nav === 'shop' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={() => setNav('shop')}
      >
        <ShoppingBagIcon className="w-4 h-4" />
      </button>
    </>
  );
};

export default SideNav;
