import { EyeIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { CollagesListInterface } from './interface';

export interface CollageCardInterface {
  cardData: CollagesListInterface;
  bg?: string;
}

const CollageCard: React.FC<CollageCardInterface> = ({ cardData, bg }) => {
  const correctedName = useMemo(() => {
    return cardData.name.split('-').join(' ').slice(0, -10);
  }, [cardData]);

  return (
    <a href={`/collages/${cardData?._id}`} target="_blank" rel="noopener noreferrer">
      <div className="cursor-pointer group">
        <div className="next-image-fix rounded overflow-hidden relative border border-gray-200 transition group-hover:shadow-md">
          <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ backgroundColor: bg }} />
          <div className="relative aspect-w-15 aspect-h-9">
            <Image
              className="transition duration-700 filter transform group-hover:brightness-110"
              alt={cardData?.name}
              src={`https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,w_1000,h_600,c_pad/${cardData?.thumbnail}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex items-center my-2">
          <div className="flex-1 mr-2">
            <p className="text-gray-500 text-xs capitalize">{cardData?.categoryMap?.category?.name}</p>
            <p className="text-gray-800 mt-1 transition group-hover:text-red-500 capitalize">{correctedName}</p>
          </div>
          <div className="relative">
            <a
              href={`/visual-board/${cardData?._id}`}
              target="_blank"
              className="relative transition opacity-0 hover:opacity-100 hover:-translate-y-8 z-10"
              rel="noopener noreferrer"
            >
              {/* TODO: Figure out a way to show the tooltip only on hover over the icon. Currently the group on the card overrides group on the anchor tag above */}
              <span className="inline-block absolute text-white text-xs bg-gray-900 rounded px-2 py-1 z-50 whitespace-nowrap -translate-x-3/4 -translate-y-7">
                See in viewer to personalize and shop
                <span className="absolute -bottom-1 right-1/4 translate-x-3.5 bg-gray-900 h-2 w-2 transform rotate-45" />
              </span>
              <EyeIcon className="w-5 h-5 hover:text-spj-yellow" />
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CollageCard;
