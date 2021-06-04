import Link from 'next/link';
import React from 'react';

const PreFooter: React.FC = () => {
  return (
    <div className="bg-white mt-14">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <svg className="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-md sm:px-12 sm:py-20 border border-gray-100">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-gray-100 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-gray-200 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-gray-700 mb-7 tracking-tight sm:text-4xl">
                  Ready to get started
                </h2>
                <button
                  type="button"
                  className="focus:outline-none shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-full bg-gradient-to-r from-spj-red to-spj-yellow"
                >
                  Start Project
                </button>
                <p className="mt-5 text-gray-500 text-sm">
                  Price starts from $99.00,{' '}
                  <Link href="/pricing">
                    <a className="text-yellow-600">checkout now</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
