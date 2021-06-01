import Carousel, { position } from '@components/Shared/Carousel';
import SectionTitle from '@components/Shared/SectionTitle';
import { StarIcon } from '@heroicons/react/solid';
import TestimonialData from '@utils/constants';
import Image from 'next/image';
import React from 'react';

const Slide = ({ testimonial }) => (
  <div className="py-12 border-r border-white px-16">
    <div className="md:flex-shrink-0">
      {[...new Array(5)].map((_d, i) => (
        <StarIcon key={`star-${i}`} className="w-5 h-5 text-yellow-500" />
      ))}
    </div>
    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
      <div className="relative text-lg font-medium text-white md:flex-grow">
        <svg
          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-600"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="pl-8">{testimonial.shortDescription}</p>
      </div>
      <footer className="mt-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
            <Image
              className="h-50 w-50 rounded-full object-cover filter contrast-125"
              src={`https://res.cloudinary.com/spacejoy/${testimonial.dp}`}
              alt={testimonial.name}
              height={'40'}
              width={'40'}
            />
          </div>
          <div className="ml-4">
            <div className="text-base font-medium text-white">Judith Black</div>
            <div className="text-base font-medium text-yellow-200">CEO, Tuple</div>
          </div>
        </div>
      </footer>
    </blockquote>
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
    <div className="bg-yellow-500 relative">
      <Carousel centerPadding="25%" centerMode customButtons position={position.top}>
        {TestimonialData.map((testimonial) => (
          <Slide key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonials;
