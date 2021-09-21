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
      <div className=" top-full flex  flex-col justify-end items-center gap-2 mt-4">
        <div className="flex items-center justify-center">
          <a
            className=" w-auto h-auto text-white  text-center py-1.5 px-3 whitespace-nowrap  rounded-lg border border-gray-900 bg-gray-900 hover:bg-gray-700 group"
            href={`/visual-board/${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in viewer
          </a>
        </div>
        <span className="text-gray-400 ">Live swap one or more products to personalize this design set</span>
      </div>
    </div>
  );
};

export default CollageImageViewGrid;
