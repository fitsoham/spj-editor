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
      <header className={`bg-white sticky top-0 z-50`}>
        <div className="container px-4 mx-auto">
          <div className="h-20 flex items-center">
            <div className="">
              <Link href="/">
                <a className={router.asPath === '/' ? 'text-red-500' : 'text-gray-700 hover:text-red-600'}>
                  <div className="next-image-fix mr-10">
                    <Image src="/logo.svg" alt="spacejoy Logo" height={'34'} width={'129'} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex-1">
              <nav>
                <ul>
                  <li className="inline-block">
                    <Link href="/interior-designs">
                      <a
                        className={
                          router.asPath === '/interior-designs' ? 'text-red-500' : 'text-gray-700 hover:text-red-600'
                        }
                      >
                        <button type="button" className="focus:outline-none text-sm py-2 px-2.5 rounded-md">
                          Ideas
                        </button>
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/collection">
                      <a
                        className={
                          router.asPath === '/collection' ? 'text-red-500' : 'text-gray-700 hover:text-red-600'
                        }
                      >
                        <button type="button" className="focus:outline-none text-sm py-2 px-2.5 h-full rounded-md">
                          Collection
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
                    <Link href="/pricing">
                      <a className={router.asPath === '/pricing' ? 'text-red-500' : 'text-gray-700 hover:text-red-600'}>
                        <button type="button" className="focus:outline-none text-sm py-2 px-2.5 rounded-md">
                          Pricing
                        </button>
                      </a>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link href="/help">
                      <a className={router.asPath === '/help' ? 'text-red-500' : 'text-gray-700 hover:text-red-600'}>
                        <button type="button" className="focus:outline-none text-sm py-2 px-2.5 rounded-md">
                          Help
                        </button>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-right">
              <Link href="/search">
                <a>
                  <button
                    type="button"
                    className={`focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full border hover:shadow-xl hover:border-gray-200 ${
                      router.asPath === '/search' ? 'border-gray-200 text-red-500' : 'border-transparent'
                    }`}
                  >
                    <span className="sr-only">Search</span>
                    <SearchIcon className="inline h-4 w-4" />
                  </button>
                </a>
              </Link>
              <button
                type="button"
                className="focus:outline-none text-gray-700 text-xs py-2 px-2 mx-2 rounded-full border border-transparent hover:shadow-xl hover:border-gray-200"
              >
                <span className="sr-only">Shopping</span>
                <ShoppingBagIcon className="inline h-4 w-4" />
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
