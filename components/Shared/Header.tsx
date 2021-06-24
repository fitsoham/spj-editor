import { ChevronDownIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import SubNav from './SubNav';

const Header: React.FC = () => {
  const [isOpenSubNav, setIsOpenSubNav] = useState(false);

  const closeSubNav = () => setIsOpenSubNav(false);

  const openSubNav = () => setIsOpenSubNav(true);

  const router = useRouter();

  return (
    <>
      <a
        className="text-sm py-3 px-2.5 bg-gray-200 inline-block absolute top-0 left-0 focus:z-50 focus:ring-1 focus:ring-gray-900 focus:outline-none"
        href="#main"
      >
        Skip to content
      </a>
      <header className={`bg-white sticky top-0 z-50`}>
        <div className="container px-4 mx-auto">
          <div className="h-20 flex items-center">
            <Link href="/">
              <a className="focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none inline-block rounded-md mr-10">
                <div className="next-image-fix mr-1">
                  <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
                </div>
              </a>
            </Link>
            <div className="flex-1">
              <nav aria-label="Primary">
                <ul>
                  <li className="inline-block">
                    <Link href="/interior-designs">
                      <a
                        className={`text-sm py-2 px-2.5 hover:text-red-600 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/interior-designs' ? 'text-red-500' : 'text-gray-700'
                        }`}
                      >
                        Ideas
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/collection">
                      <a
                        className={`text-sm py-2 px-2.5 hover:text-red-600 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/collection' ? 'text-red-500' : 'text-gray-700'
                        }`}
                      >
                        Collection
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className={`hover:text-red-600 text-sm py-2 px-2.5 flex items-center rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
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
                    <Link href="/pricing">
                      <a
                        className={`text-sm py-2 px-2.5 hover:text-red-600 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/pricing' ? 'text-red-500' : 'text-gray-700'
                        }`}
                      >
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/help">
                      <a
                        className={`text-sm py-2 px-2.5 hover:text-red-600 rounded-md focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                          router.asPath === '/help' ? 'text-red-500' : 'text-gray-700'
                        }`}
                      >
                        Help
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-right">
              <Link href="/search">
                <a
                  className={`text-gray-700 text-xs py-2 px-2 mx-2 rounded-full border hover:shadow-xl hover:border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none ${
                    router.asPath === '/search' ? 'border-gray-200 text-red-500' : 'border-transparent'
                  }`}
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="inline h-4 w-4" />
                </a>
              </Link>
              <a className="text-gray-700 text-xs py-2 px-2 mx-2 rounded-full border border-transparent hover:shadow-xl hover:border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none">
                <span className="sr-only">Shopping</span>
                <ShoppingBagIcon className="inline h-4 w-4" />
              </a>
              <a className="text-white text-xs py-1.5 px-3 mx-2 rounded-full border border-gray-900 bg-gray-900 hover:bg-gray-700">
                Start Project
              </a>
              <a className="text-gray-700 text-xs py-1.5 px-3 ml-2 rounded-full border border-gray-600 hover:bg-gray-50">
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </header>
      <SubNav subNavState={isOpenSubNav} closeSubNav={closeSubNav} />
    </>
  );
};

export default Header;
