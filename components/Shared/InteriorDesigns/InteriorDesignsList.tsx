import Image from 'next/image';
import React from 'react';

const InteriorDesignsList: React.FC = () => {
  return (
    <div>
      <div className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            10,000+ Interior Design Ideas
          </h1>
          <div className="">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-8 lg:gap-y-12 xl:grid-cols-8 mt-8">
              <li>
                <div className="">
                  <Image
                    className="rounded-lg object-cover filter contrast-125"
                    alt="tmp"
                    src="https://images.unsplash.com/photo-1622488717091-907d6233d45f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    height="150"
                    width="160"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="py-6 h-screen">hi</div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignsList;
