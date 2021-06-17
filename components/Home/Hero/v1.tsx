import { ArrowRightIcon } from '@heroicons/react/outline';
import blurredBg from '@public/images/bg-base-64';
import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
	}
	to {
    opacity: 1;
    transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  opacity: 0;
  animation: ${entry} 0.8s forwards;
  transform: translateY(20px);
  &.details {
    animation-delay: 550ms;
  }
  &.banner {
    animation-delay: 300ms;
  }
`;

const v1: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-14 grid-cols-4 items-center">
        <div>
          <AnimateBox className="details">
            <h1 className="lg:text-3xl xl:text-5xl mb-4 lg:semibold xl:font-extrabold tracking-tight">Live in joy</h1>
            <p className="mb-4 text-gray-600">
              Design a stunning home with handpicked products from top brands that you can shop instantly
            </p>
            <button
              type="button"
              className="focus:outline-none shadow-md hover:shadow-xl text-base text-white py-3 px-12 rounded-xl bg-gray-900 tracking-wide"
            >
              Start Project Now <ArrowRightIcon className="inline w-4 h-4" />
            </button>
            <p className="text-sm mt-6 text-gray-700">Price starts from $99.00, checkout now</p>
          </AnimateBox>
        </div>
        <div className="col-start-2 col-end-5">
          <AnimateBox className="banner">
            <div className="absolute shape-2 bottom-0 -ml-2 -mb-2" />
            <div className="relative overflow-hidden rounded-2xl">
              <div className="next-image-fix filter blur-sm bg-gray-100">
                <Image
                  className="object-cover "
                  src={blurredBg}
                  alt="spacejoy happy customer"
                  height={'700'}
                  width={'1114'}
                />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <Image
                  className="object-cover"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_scale,h_1050,w_1671/v1622172527/spj-v2/spj-happy-customer_ahkoxm.jpg"
                  alt="spacejoy happy customer"
                  height={'700'}
                  width={'1114'}
                />
              </div>
            </div>
          </AnimateBox>
        </div>
      </div>
    </div>
  );
};

export default v1;
