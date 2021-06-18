import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import blurredBg from '@public/images/bg-base-64';
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
    <div className="flex bg-gray-50">
      <div className="h-full relative flex-1 bg-gray-200">
        <Tween from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0 }} duration={1}>
          <div className="absolute inset-0">
            <Image
              className="object-cover"
              src={blurredBg}
              alt="spacejoy happy customer"
              height={'700'}
              width={'896'}
            />
          </div>
          <div className="next-image-fix">
            <Image
              className="object-cover"
              src={`${cloudinary.baseDeliveryURL}/${data?.coverImg}`}
              alt="spacejoy happy customer"
              height={'700'}
              width={'896'}
            />
          </div>
        </Tween>
      </div>
      <div className="h-full flex-1 self-end p-8">
        <Tween from={{ opacity: 0, x: 20 }} to={{ opacity: 1, x: 0 }} duration={1} stagger={0.5}>
          <small className="text-sm text-opacity-70">Published Date: {formattedDate}</small>
          <h1 className="sm:text-3xl md:text-5xl text-gray-600 mt-4 mb-4 max-w-xl leading-loose">{data?.name}</h1>
          <p className="h-40 overflow-hidden overflow-ellipsis text-justify text-sm max-w-xl">{data?.description}</p>
        </Tween>
        <Tween from={{ opacity: 0, y: -50 }} to={{ opacity: 1, y: 0 }} duration={1} delay={0.5}>
          <div>
            <ArrowNarrowDownIcon className="w-6 h-6 mt-10 animate-bounce" />
          </div>
        </Tween>
      </div>
    </div>
  );
};

export default CollectionBanner;
