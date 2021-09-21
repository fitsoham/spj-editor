import { cloudinary } from '@utils/config';
import Image from 'next/image';
import React from 'react';

const CollageImageViewGrid: React.FC<{ src: string; id: string }> = ({ src, id }) => {
  return (
    <div className="sticky top-40">
      <div className="aspect-w-3 aspect-h-2  rounded-2xl border">
        <Image
          src={`${cloudinary.baseDeliveryURL}/${src}`}
          className="mx-auto my-auto"
          alt="name"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className=" top-full flex justify-end items-center gap-4 mt-4">
        <span className="text-gray-400 ">
          Modify this collage to your liking by swapping products for ones you love.
        </span>
        <div className="flex items-center justify-center">
          <a
            className=" w-auto h-auto text-white  text-center py-1.5 px-3 whitespace-nowrap  rounded-lg border border-gray-900 bg-gray-900 hover:bg-gray-700 group"
            href={`/visual-board/${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-block absolute text-white text-xs bg-gray-900 rounded px-2 py-1 z-50 whitespace-nowrap transition opacity-0 -translate-x-1/4 -translate-y-10 group-hover:opacity-100 group-hover:-translate-y-8">
              See in Viewer
              <span className="absolute -bottom-1 right-1/2 -translate-x-full bg-gray-900 h-2 w-2 transform rotate-45" />
            </span>
            See in viewer
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollageImageViewGrid;
