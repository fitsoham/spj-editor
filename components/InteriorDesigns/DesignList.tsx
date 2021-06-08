import Pagination from '@components/Shared/Pagination';
import { HeartIcon, ShareIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

const DesignList: React.FC = () => {
  return (
    <div className="bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/c_scale,w_950/v1622212641/server/designs/render/60b10021a4c72c00239b4323.jpg"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_950/v1622212208/server/designs/render/60b0fe70a4c72c00239b41cd.png"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Living Room</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_950/v1622208324/server/designs/render/60b0ef43a4c72c00239b3678.jpg"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_950/v1622119424/server/designs/render/60af93ff463d5700243613c5.jpg"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1622033369/server/designs/render/60ae43d77c68df00239a8c22.png"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1622030320/server/designs/render/60ae37ee7c68df00239a84bd.jpg"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1621942704/server/designs/render/60ace1ad7c68df00239a02e0.png"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
              alt="tmp"
              src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1621941323/server/designs/render/60acdc4a7c68df002399ff5e.jpg"
              height="300"
              width="500"
            />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-lg font-semibold">Bedroom</p>
                <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <HeartIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-gray-700 text-xs py-2 px-2 rounded-full hover:shadow-sm hover:bg-gray-100"
                >
                  <span className="sr-only">Shopping</span>
                  <ShareIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default DesignList;
