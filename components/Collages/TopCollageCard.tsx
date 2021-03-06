import { ArrowRightIcon } from '@heroicons/react/outline';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TopCollageCardInterface {
  cardData: {
    slug: string;
    cdnThumbnail: string;
    name: string;
    metaTitle: string;
  };
  inset: boolean;
}

const TopCollageCard: React.FC<TopCollageCardInterface> = ({ cardData, inset }) => {
  return (
    <li>
      <Link href={`/collages/room/${cardData?.slug}`}>
        <a className="rounded inline-block focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-gray-700 focus:outline-none">
          <div className="group next-image-fix rounded relative overflow-hidden bg-gray-200 transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-300">
            <Image
              className="rounded object-cover"
              alt={cardData?.name}
              src={`${cloudinary.baseDeliveryURL}/${cardData?.cdnThumbnail}`}
              height="300"
              width="225"
            />
            {inset && (
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-16 px-4">
                <p className="text-xl font-bold text-white mb-1">
                  {cardData?.name}{' '}
                  <ArrowRightIcon className="transition-transform transform group-hover:translate-x-3 inline w-4 h-4" />
                </p>
                {/* <p className="text-gray-300 text-sm">{cardData?.metaTitle}</p> */}
              </div>
            )}
          </div>
          {!inset && (
            <div className="pt-4">
              <p className="text-lg font-semibold">{cardData?.name}</p>
              <p className="text-gray-500 text-sm">{cardData?.metaTitle}</p>
            </div>
          )}
        </a>
      </Link>
    </li>
  );
};

export default React.memo(TopCollageCard);
