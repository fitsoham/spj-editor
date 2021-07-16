import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
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
    <div className="container mx-auto px-4 py-10">
      <div className="flex overflow-hidden items-center xl:space-x-10 2xl:space-x-20">
        <div className="">
          <Tween from={{ opacity: 0, x: 50 }} to={{ opacity: 1, x: 0 }} duration={1} stagger={0.5}>
            <p className="text-sm text-opacity-70 text-gray-600">{formattedDate}</p>
            <h1 className="sm:text-3xl md:text-5xl text-gray-900 mt-2 mb-4 max-w-xl leading-loose">{data?.name}</h1>
            <p className="mt-4 mb-8 overflow-hidden overflow-ellipsis text-sm text-gray-600 max-w-xl">
              {data?.description}
            </p>
            <button
              type="button"
              className="group shadow-xs hover:shadow-md text-base text-white py-3 px-12 rounded-xl bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
            >
              Start Project <ArrowNarrowRightIcon className="inline h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </Tween>
        </div>
        <div className="next-image-fix rounded-lg">
          <Image
            className="object-cover rounded-lg"
            src={`${cloudinary.baseDeliveryURL}/v1626409657/spj-v2/bed_f8ioir.jpg`}
            alt="spacejoy happy customer"
            height={'404'}
            width={'728'}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
