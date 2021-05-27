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
    animation-delay: 450ms;
  }
  &.banner {
    animation-delay: 300ms;
  }
`;

const v1 = () => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-14 grid-cols-4 items-center">
        <div>
          <AnimateBox className="details">
            <h1 className="text-5xl mb-4">Live in joy</h1>
            <p className="text-lg mb-4">Online interior design services by Spacejoy</p>
            <p className="text-base text-gray-500 mb-6">
              Get your room designed by professional interior designer and shop high-quality furniture and decor from
              your favorite brands.
            </p>
            <button
              type="button"
              className="focus:outline-none shadow-md hover:shadow-xl text-base text-white py-4 px-12 rounded-lg bg-gradient-to-r from-spj-red to-spj-yellow"
            >
              Start Project
            </button>
            <p className="text-sm mt-6 text-gray-500">Price starts from $99.00, checkout now</p>
          </AnimateBox>
        </div>
        <div className="col-start-2 col-end-5">
          <AnimateBox className="banner rounded-xl">
            <Image
              className="rounded-xl"
              src="https://res.cloudinary.com/spacejoy/image/upload/v1622109948/spj-v2/spj-happy-customer_iw5nbv.jpg"
              alt="spacejoy happy customer"
              height={'688'}
              width={'1148'}
            />
          </AnimateBox>
        </div>
      </div>
    </div>
  );
};

export default v1;
