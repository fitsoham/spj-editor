import { ChevronDownIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SubNav from './SubNav';

const Header: React.FC = () => {
  const [isOpenSubNav, setIsOpenSubNav] = useState(false);

  const closeSubNav = () => setIsOpenSubNav(false);

  const openSubNav = () => setIsOpenSubNav(true);

  return (
    <>
      <header className={`bg-white sticky top-0 z-20`}>
        <div className="container p-4 mx-auto">
          <div className="flex items-center">
            <div className="w-40 mt-2">
              <Link href="/">
                <a href="/">
                  <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
                </a>
              </Link>
            </div>
            <div className="flex-1">
              <nav>
                <ul>
                  <li className="inline-block">
                    <Link href="/">
                      <a href="/">
                        <button
                          type="button"
                          className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                        >
                          Ideas
                        </button>
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className={`focus:outline-none hover:text-red-600 text-sm py-2 px-2.5 rounded-md flex items-center ${
                        isOpenSubNav ? 'text-red-600' : 'text-gray-700'
                      }`}
                      onClick={isOpenSubNav ? closeSubNav : openSubNav}
                    >
                      Stories{' '}
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform delay-75 duration-300 ease-in-out transform ${
                          isOpenSubNav ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                    >
                      Quiz
                    </button>
                  </li>
                  <li className="inline-block">
                    <Link href="/pricing">
                      <a>
                        <button
                          type="button"
                          className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                        >
                          Pricing
                        </button>
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/help">
                      <a>
                        <button
                          type="button"
                          className="focus:outline-none text-gray-700 hover:text-red-600 text-sm py-2 px-2.5 rounded-md"
                        >
                          Help
                        </button>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex-auto text-right">
              <Link href="/search">
                <a href="">
                  <button
                    type="button"
                    className="focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full hover:shadow-md"
                  >
                    <SearchIcon className="h-4 w-4" />
                  </button>
                </a>
              </Link>
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
