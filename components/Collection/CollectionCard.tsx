import { ArrowRightIcon } from '@heroicons/react/outline';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CollectionCard = ({ cardData, inset }) => {
  return (
    <li>
      <Link href={`/collection/${cardData?.slug}`}>
        <a>
          <div className="group next-image-fix rounded-xl relative overflow-hidden bg-gray-200 transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-300">
            <Image
              className="rounded-xl object-cover"
              alt="tmp"
              src={`${cloudinary.baseDeliveryURL}/${cardData?.cdnThumbnail}`}
              height="300"
              width="225"
            />
            {inset && (
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-16 px-4">
                <p className="text-lg font-semibold text-white">
                  {cardData?.name}{' '}
                  <ArrowRightIcon className="transition-transform transform group-hover:translate-x-3 inline w-4 h-4" />
                </p>
                <p className="text-gray-300 text-sm">{cardData?.metaTitle}</p>
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

export default React.memo(CollectionCard);
