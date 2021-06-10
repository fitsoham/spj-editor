import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { cloudinary } from '@utils/config';

const CollectionCard = ({ cardData, inset }) => {
  return (
    <li>
      <Link href={`/collection/${cardData?.slug}`}>
        <a>
          <div className="next-image-fix relative rounded-sm overflow-hidden bg-yellow-300 transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
            <Image
              className="rounded-sm object-cover"
              alt="tmp"
              src={`${cloudinary.baseDeliveryURL}/${cardData?.cdnThumbnail}`}
              height="300"
              width="225"
            />
            {inset && (
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                <p className="text-lg font-semibold text-white">
                  {cardData?.name} <ArrowRightIcon className="inline w-4 h-4" />
                </p>
                <p className="text-yellow-400 text-sm">{cardData?.metaTitle}</p>
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
