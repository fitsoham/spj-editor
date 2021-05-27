import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container py-4 mx-auto">
        <div className="flex items-center">
          <div className="w-40 mt-2">
            <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
          </div>
          <div className="flex-1">
            <nav>
              <ul>
                <li className="inline-block px-2 text-sm text-gray-600 hover:text-red-600">Ideas</li>
                <li className="inline-block px-2 text-sm text-gray-600 hover:text-red-600">Stories</li>
                <li className="inline-block px-2 text-sm text-gray-600 hover:text-red-600">Quiz</li>
                <li className="inline-block px-2 text-sm text-gray-600 hover:text-red-600">Pricing</li>
              </ul>
            </nav>
          </div>
          <div className="flex-auto text-right">
            <button
              type="button"
              className="focus:outline-none text-gray-600 text-xs py-2 px-5 rounded-full border border-gray-600 hover:bg-gray-50"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
