import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import React from 'react';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface BannerProps {
  data: {
    publishedDate?: string;
    name?: string;
    description?: string;
    coverImg?: string;
  };
}

const CollectionBanner: React.FC<BannerProps> = ({ data }) => {
  const date = new Date(data?.publishedDate || '');
  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div className="flex bg-blue-900">
      <div className="h-full flex-1 next-image-fix bg-gray-200">
        <Image
          className="object-cover"
          src={`${cloudinary.baseDeliveryURL}/${data?.coverImg}`}
          alt="spacejoy happy customer"
          height={'700'}
          width={'896'}
        />
      </div>
      <div className="h-full flex-1 self-end p-8">
        <small className="text-sm text-white text-opacity-70">Published Date: {formattedDate}</small>
        <h1 className="sm:text-3xl md:text-5xl text-blue-300 mt-4 mb-4 max-w-xl leading-loose">{data?.name}</h1>
        <p className="text-gray-200 h-20 overflow-hidden overflow-ellipsis text-justify text-sm max-w-xl">
          {data?.description}
        </p>
        <ArrowNarrowDownIcon className="w-6 h-6 mt-10 text-white animate-bounce" />
      </div>
    </div>
  );
};

export default CollectionBanner;
