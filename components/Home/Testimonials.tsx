import Carousel from '@components/Common/Carousel';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import TestimonialData from '@utils/constants';
import Image from 'next/image';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const Slide = ({ testimonial }) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg md:max-w-3xl py-5">
    <div className="flex items-center">
      <div className="md:flex-shrink-0 -ml-16">
        <Image
          className="h-48 w-48 rounded-xl object-cover filter contrast-125"
          src={`https://res.cloudinary.com/spacejoy/${testimonial.dp}`}
          alt={testimonial.name}
          height={'120'}
          width={'120'}
        />
      </div>
      <div className="p-6 bg-white-400">
        <div className="flex">
          <h3 className="text-2xl">{testimonial.name}</h3>
          <div className="flex ml-4 items-center ">
            {[...new Array(5)].map((_d, i) => (
              <StarIcon key={`star-${i}`} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>
        </div>
        <p className="mt-2 text-gray-500">{testimonial.shortDescription}</p>
        <a href="#" className="inline-block mt-2 text-semibold leading-tight text-red-500">
          Read full story <ArrowRightIcon className="inline-block ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const Testimonials = (): JSX.Element => (
  <div>
    <SectionTitle
      accent="yellow"
      feature="Testimonials"
      title="Hear it from our customers"
      description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
    />
    <div className="bg-yellow-50 py-24 relative">
      <Carousel slidesToShow={1} centerPadding="25%" centerMode customButtons position="top">
        {TestimonialData.map((testimonial) => (
          <Slide key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonials;
