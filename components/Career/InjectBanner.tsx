import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

const career: React.FC = () => {
  return (
    <div className="relative bg-gray-800 mt-28">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2880&q=80"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p className="text-base tracking-wider text-gray-300">Award winning support</p>
          <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</h2>
          <p className="mt-3 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/career">
                <a className="focus:outline-none shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-full bg-gradient-to-r from-spj-red to-spj-yellow tracking-wide">
                  See all open positions <ExternalLinkIcon className="inline w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default career;
