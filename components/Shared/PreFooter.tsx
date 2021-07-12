import Link from 'next/link';
import React from 'react';

const PreFooter: React.FC = () => (
  <div className="relative py-28">
    <div className="relative">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-7 tracking-tight text-4xl">Ready to get started</h2>
        <button
          type="button"
          className="shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-xl bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
        >
          Start Project
        </button>
        <p className="mt-5 text-gray-700 text-sm">
          Price starts from $99.00,{' '}
          <Link href="/pricing">
            <a className="text-red-500 px-1 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded-md">
              checkout now
            </a>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default PreFooter;
