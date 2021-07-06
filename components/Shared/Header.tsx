import { ChevronDownIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
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
                  <svg width="129" height="34" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="a">
                        <stop stopColor="#F5296E" offset="0%" />
                        <stop stopColor="#F39C12" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none">
                      <path
                        d="M49 23.08a5.73 5.73 0 01-2.23-.43 4.933 4.933 0 01-1.75-1.21A4.453 4.453 0 0144 19.58l2.3-.56c.181.57.538 1.067 1.02 1.42.5.343 1.095.519 1.7.5.443.009.881-.087 1.28-.28.357-.172.664-.434.89-.76a1.9 1.9 0 00.33-1.1 1.66 1.66 0 00-.55-1.27 3.7 3.7 0 00-1.73-.77l-.74-.16a5.973 5.973 0 01-3.13-1.52 3.6 3.6 0 01-1.01-2.58 3.94 3.94 0 01.36-1.69c.238-.51.578-.966 1-1.34a4.547 4.547 0 011.5-.88 5.445 5.445 0 011.86-.31 5.182 5.182 0 012.1.42 4.641 4.641 0 011.64 1.19c.46.526.789 1.153.96 1.83l-2.28.56a2.868 2.868 0 00-.96-1.38 2.462 2.462 0 00-1.52-.48 2.453 2.453 0 00-1.13.25 2.04 2.04 0 00-.78.68 1.7 1.7 0 00-.29.97 1.5 1.5 0 00.58 1.24 4.57 4.57 0 001.78.74l.74.16c2.72.614 4.08 1.994 4.08 4.14a4.4 4.4 0 01-.37 1.81c-.24.545-.6 1.03-1.05 1.42a5 5 0 01-1.59.92 5.8 5.8 0 01-1.99.33zm6.94 3.66V12.32h2.1l.1 1.68a4.052 4.052 0 013.54-1.98 4.465 4.465 0 011.93.42c.59.278 1.117.672 1.55 1.16.45.51.8 1.1 1.03 1.74.251.692.376 1.424.37 2.16a6.252 6.252 0 01-.38 2.2 5.539 5.539 0 01-1.06 1.78c-.443.5-.984.9-1.59 1.18a4.644 4.644 0 01-1.97.42 4.11 4.11 0 01-1.9-.44 3.852 3.852 0 01-1.42-1.24v5.34h-2.3zM61.2 21a2.728 2.728 0 001.54-.45c.46-.307.83-.732 1.07-1.23a3.927 3.927 0 00.39-1.78 3.865 3.865 0 00-.39-1.77 3.122 3.122 0 00-1.07-1.22 2.728 2.728 0 00-1.54-.45 2.728 2.728 0 00-1.54.45 3.122 3.122 0 00-1.07 1.22 3.865 3.865 0 00-.39 1.77 3.927 3.927 0 00.39 1.78c.24.498.61.923 1.07 1.23.457.301.993.458 1.54.45zm10.58 2.08a4.3 4.3 0 01-1.47-.24c-.43-.15-.827-.38-1.17-.68a3.083 3.083 0 01-1.06-2.36 2.955 2.955 0 01.53-1.75c.379-.52.895-.925 1.49-1.17a5.549 5.549 0 012.24-.42 6.639 6.639 0 012.56.5v-.66a2.76 2.76 0 00-.26-1.23 1.988 1.988 0 00-.74-.83 2.146 2.146 0 00-1.16-.3 2.32 2.32 0 00-1.3.38 2.26 2.26 0 00-.86 1.06l-2.12-.48a3.408 3.408 0 01.87-1.52c.432-.435.95-.775 1.52-1a5.1 5.1 0 011.93-.36 4.832 4.832 0 011.79.32c.52.2.994.507 1.39.9.391.394.698.864.9 1.38.22.568.328 1.172.32 1.78v6.38h-2.1L75 21.4c-.293.52-.731.944-1.26 1.22a4.017 4.017 0 01-1.96.46zM70.4 19.7c-.004.282.08.558.24.79.17.241.4.431.67.55.318.14.663.208 1.01.2.46.008.915-.102 1.32-.32.377-.204.695-.504.92-.87.23-.376.347-.81.34-1.25v-.24a6.692 6.692 0 00-1.07-.35 4.9 4.9 0 00-1.13-.13 2.862 2.862 0 00-1.67.44c-.4.257-.64.704-.63 1.18zm13.98 3.38a5.1 5.1 0 01-2.06-.41 5.04 5.04 0 01-1.64-1.14 5.2 5.2 0 01-1.09-1.73 5.949 5.949 0 01-.39-2.18 5.972 5.972 0 01.4-2.2 5.634 5.634 0 011.1-1.78 4.961 4.961 0 013.72-1.62 4.927 4.927 0 011.98.39 4.5 4.5 0 011.55 1.1c.435.477.754 1.049.93 1.67l-2.18.52a2.76 2.76 0 00-.95-1.18 2.36 2.36 0 00-1.37-.42 2.408 2.408 0 00-1.44.46 3.14 3.14 0 00-1.01 1.25 4.172 4.172 0 00-.37 1.79c-.01.603.112 1.2.36 1.75.216.485.558.902.99 1.21a2.5 2.5 0 001.47.44 2.712 2.712 0 001.46-.41 2.46 2.46 0 00.98-1.17l2.16.5a4 4 0 01-.96 1.67 4.718 4.718 0 01-1.62 1.1 5.218 5.218 0 01-2.02.39zm11.28 0a5.416 5.416 0 01-2.13-.41 5.1 5.1 0 01-1.69-1.15 5.125 5.125 0 01-1.11-1.75 6.143 6.143 0 01-.39-2.23 5.949 5.949 0 01.39-2.18 5.517 5.517 0 011.08-1.75 4.915 4.915 0 013.67-1.59 5.051 5.051 0 012.01.39 4.62 4.62 0 011.58 1.11 4.971 4.971 0 011.03 1.71c.247.704.37 1.445.36 2.19v.68h-7.74c.05.559.217 1.1.49 1.59.24.427.588.782 1.01 1.03.44.247.936.371 1.44.36a2.875 2.875 0 002.56-1.46l2.02.78c-.24.548-.6 1.036-1.05 1.43a4.784 4.784 0 01-1.6.93 5.775 5.775 0 01-1.93.32zm-.18-9.2a2.439 2.439 0 00-1.25.32 2.782 2.782 0 00-.93.9c-.264.414-.44.876-.52 1.36h5.28a3.81 3.81 0 00-.46-1.36 2.453 2.453 0 00-.89-.9 2.4 2.4 0 00-1.23-.32zm9.58-4.48c.002.247-.064.489-.19.7a1.465 1.465 0 01-.5.51c-.214.129-.46.195-.71.19a1.331 1.331 0 01-.71-.19 1.465 1.465 0 01-.5-.51 1.346 1.346 0 01-.19-.7 1.346 1.346 0 01.19-.7 1.47 1.47 0 01.5-.51c.214-.128.46-.194.71-.19.25-.004.496.062.71.19.206.126.378.302.5.51.126.212.192.454.19.7zm-3.52 17.54a3.528 3.528 0 01-1.84-.5l.54-1.78c.292.17.623.26.96.26.371.019.73-.136.97-.42.252-.34.376-.757.35-1.18v-11h2.3v11.14a3.857 3.857 0 01-.41 1.82c-.26.507-.66.93-1.15 1.22a3.3 3.3 0 01-1.72.44zm10.62-3.86a5.364 5.364 0 01-2.11-.41 5.033 5.033 0 01-1.69-1.16 5.364 5.364 0 01-1.12-1.76 5.95 5.95 0 01-.4-2.21 5.894 5.894 0 01.4-2.19 5.283 5.283 0 011.13-1.76 5.09 5.09 0 011.72-1.16 5.564 5.564 0 012.15-.41 5.364 5.364 0 012.11.41 5.033 5.033 0 011.69 1.16c.483.505.864 1.1 1.12 1.75a5.87 5.87 0 01.4 2.2 5.95 5.95 0 01-.4 2.21 5.283 5.283 0 01-1.13 1.76 5.09 5.09 0 01-1.72 1.16 5.564 5.564 0 01-2.15.41zm.04-2.08a2.728 2.728 0 001.54-.45c.46-.307.83-.732 1.07-1.23a3.927 3.927 0 00.39-1.78 3.865 3.865 0 00-.39-1.77 3.122 3.122 0 00-1.07-1.22 2.728 2.728 0 00-1.54-.45 2.728 2.728 0 00-1.54.45 3.122 3.122 0 00-1.07 1.22 3.865 3.865 0 00-.39 1.77 3.927 3.927 0 00.39 1.78c.24.498.61.923 1.07 1.23.457.301.993.458 1.54.45zm8.46 5.94a4.1 4.1 0 01-.93-.1 3.238 3.238 0 01-.83-.32l.5-1.82c.161.072.329.129.5.17.176.046.358.07.54.07a1.69 1.69 0 001.05-.34 2.48 2.48 0 00.75-1.1l.32-.82-4.26-10.36h2.52l2.82 7.82 2.56-7.82h2.44l-4.44 11.72a5.126 5.126 0 01-1.45 2.2 3.23 3.23 0 01-2.09.7z"
                        fill="#000"
                      />
                      <rect fill="url(#a)" width="34" height="34" rx="8" />
                      <path
                        d="M25.124 13.1l-7.022-4.76a1.953 1.953 0 00-2.201 0L8.879 13.1c-.55.372-.88.999-.879 1.67v9.224C8.001 25.102 8.883 26 9.972 26h6.254a.5.5 0 00.496-.505.5.5 0 00-.496-.504H9.972a.99.99 0 01-.98-.997v-9.228c0-.333.164-.644.437-.829l7.021-4.76a.974.974 0 011.102 0l7.021 4.76a.998.998 0 01.437.829v9.175c0 .28-.115.548-.319.737a.969.969 0 01-.751.256c-2.568-.24-4.994-1.197-6.815-2.704-1.822-1.507-2.824-3.374-2.856-5.289a1.168 1.168 0 011.031-1.226c.31-.024.616.085.844.3.227.214.357.516.356.832a.51.51 0 00.145.36.492.492 0 00.354.149.5.5 0 00.496-.505c0-.627.5-1.135 1.116-1.135.616 0 1.116.508 1.116 1.135a6.38 6.38 0 01-1.264 3.7.51.51 0 00.124.683.49.49 0 00.677-.088 7.36 7.36 0 001.455-4.291 2.141 2.141 0 00-1.385-2.016 2.085 2.085 0 00-2.336.635 2.071 2.071 0 00-1.767-.761c-1.134.104-1.991 1.091-1.952 2.25.074 4.486 4.718 8.431 10.572 8.98a1.952 1.952 0 001.508-.517c.409-.38.641-.918.641-1.482V14.77a2.012 2.012 0 00-.876-1.669z"
                        fill="#FFF"
                      />
                    </g>
                  </svg>
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
            <div className="w-2/5 text-right">
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
