import Link from 'next/link';
import React from 'react';

const PreFooter: React.FC = () => {
  return (
    <div className="relative py-28 bg-white">
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
  );
};

export default PreFooter;
