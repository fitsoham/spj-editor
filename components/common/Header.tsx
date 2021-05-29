import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useState } from 'react';
import SubNav from './SubNav';

const Header: React.FC = () => {
  const [isOpenSubNav, setIsOpenSubNav] = useState(false);

  const closeSubNav = () => setIsOpenSubNav(false);

  const toggleSubNav = () => setIsOpenSubNav((isOpenSubNav) => !isOpenSubNav);

  return (
    <>
      <header className={`bg-white sticky top-0 z-10`}>
        <div className="container p-4 mx-auto">
          <div className="flex items-center">
            <div className="w-40 mt-2">
              <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
            </div>
            <div className="flex-1">
              <nav>
                <ul>
                  <li className="inline-block">
                    <button
                      type="button"
                      className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                      onClick={toggleSubNav}
                    >
                      Ideas
                    </button>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                      onClick={toggleSubNav}
                    >
                      Stories
                    </button>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                      onClick={toggleSubNav}
                    >
                      Quiz
                    </button>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                      onClick={toggleSubNav}
                    >
                      Pricing
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex-auto text-right">
              <button
                type="button"
                className="focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full hover:shadow-md"
              >
                <SearchIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full hover:shadow-md"
              >
                <ShoppingBagIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="focus:outline-none text-white text-xs py-1.5 px-3 mx-2 rounded-full border border-gray-900 bg-gray-900 hover:bg-gray-700"
              >
                Start Project
              </button>
              <button
                type="button"
                className="focus:outline-none text-gray-700 text-xs py-1.5 px-3 ml-2 rounded-full border border-gray-600 hover:bg-gray-50"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </header>
      <SubNav subNavState={isOpenSubNav} closeSubNav={closeSubNav} />
    </>
  );
};

export default Header;
