import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import React from 'react';
import { Tween } from 'react-gsap';

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
    <div className="container mx-auto px-4">
      <div className="flex bg-gray-50 rounded-xl overflow-hidden items-center border border-gray-100 bg-gradient-to-r from-red-100 to-indigo-50">
        <Tween from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0 }} duration={1}>
          <div className="next-image-fix">
            <Image
              className="object-cover rounded-l-xl"
              src={`${cloudinary.baseDeliveryURL}/${data?.coverImg}`}
              alt="spacejoy happy customer"
              height={'700'}
              width={'1500'}
            />
          </div>
        </Tween>
        <div className="p-8">
          <Tween from={{ opacity: 0, x: 50 }} to={{ opacity: 1, x: 0 }} duration={1} stagger={0.5}>
            <p className="text-sm text-opacity-70 text-gray-600">{formattedDate}</p>
            <h1 className="sm:text-3xl md:text-5xl text-gray-600 mt-4 mb-4 max-w-xl leading-loose">{data?.name}</h1>
            <p className="h-24 mt-4 overflow-hidden overflow-ellipsis text-justify text-sm max-w-xl">
              {data?.description}
            </p>
          </Tween>
          <Tween from={{ opacity: 0, y: -50 }} to={{ opacity: 1, y: 0 }} duration={1} delay={0.5}>
            <div>
              <ArrowNarrowDownIcon className="w-4 h-4 mt-4 animate-bounce" />
            </div>
          </Tween>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
