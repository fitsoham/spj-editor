import Link from 'next/link';
import React from 'react';

const PreFooter: React.FC = () => {
  return (
    <div className="relative py-28">
      <div className="relative">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-7 tracking-tight sm:text-4xl">Ready to get started</h2>
          <button
            type="button"
            className="focus:outline-none shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-full bg-gray-900"
          >
            Start Project
          </button>
          <p className="mt-5 text-gray-700 text-sm">
            Price starts from $99.00,{' '}
            <Link href="/pricing">
              <a className="text-red-500">checkout now</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
