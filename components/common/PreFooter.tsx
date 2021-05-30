import Link from 'next/link';
import React from 'react';

const PreFooter = () => {
  return (
    <div className="py-32 text-center">
      <h2 className="text-5xl text-gray-700 mb-7">Ready to get started</h2>
      <button
        type="button"
        className="focus:outline-none shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-full bg-gradient-to-r from-spj-red to-spj-yellow"
      >
        Start Project
      </button>
      <p className="mt-5 text-gray-400 text-sm">
        Price starts from $99.00,{' '}
        <Link href="/pricing">
          <a className="text-yellow-500">checkout now</a>
        </Link>
      </p>
    </div>
  );
};

export default PreFooter;
