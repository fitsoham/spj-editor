import { HeartIcon, ShareIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import * as React from 'react';

export interface DesignCardInterface {
  cardData: {
    name: string;
    cdnRender: Array<string>;
    room: {
      roomType: string;
    };
  };
}

const DesignCard: React.FC<DesignCardInterface> = ({ cardData }) => {
  return (
    <div className="cursor-pointer">
      <Image
        className="object-cover rounded-sm transition-transform duration-700 transform hover:scale-105"
        alt="tmp"
        src={`https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/c_scale,w_950/${cardData?.cdnRender[0]}`}
        height="300"
        width="500"
      />
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-gray-500 text-sm capitalize">{cardData?.room?.roomType}</p>
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
      <p className="text-gray-800 font-semibold">{cardData?.name}</p>
    </div>
  );
};

export default DesignCard;
