import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import blurredBg from '@public/images/bg-base-64';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tween } from 'react-gsap';
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
      <div className="flex items-center">
        <div className="flex-1 w-1/3 lg:w-1/4 mr-8 xl:mr-16">
          <div className="overflow-hidden">
            <Tween from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }} duration={0.75}>
              <h1 className="lg:text-3xl xl:text-5xl mb-4 lg:semibold xl:font-extrabold tracking-tight">Live in joy</h1>
            </Tween>
          </div>
          <div className="overflow-hidden">
            <Tween from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }} duration={0.5} delay={0.25}>
              <p className="mb-4 text-gray-600">
                Design a stunning home with handpicked products from top brands that you can shop instantly
              </p>
            </Tween>
          </div>
          <div className="overflow-hidden pb-6 pt-1">
            <Tween from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }} duration={0.5} delay={0.5}>
              <button
                type="button"
                className="group overflow-hidden shadow-sm hover:shadow-lg text-base text-white py-3 xl:py-5 px-4 xl:px-10 rounded-xl bg-gray-900 tracking-wide focus:ml-0.5 focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-gray-400 focus:outline-none"
              >
                Start Project Now{' '}
                <ArrowNarrowRightIcon className="inline h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </Tween>
          </div>
          <div className="overflow-hidden py-1">
            <Tween from={{ opacity: 0, y: 100 }} to={{ opacity: 1, y: 0 }} duration={0.5} delay={0.65}>
              <p className="text-sm text-gray-700">
                Price starts from $99.00,{' '}
                <Link href="/pricing">
                  <a className="text-red-500 px-1 focus:ring-1 focus:ring-gray-500 focus:outline-none rounded-md">
                    checkout now
                  </a>
                </Link>
              </p>
            </Tween>
          </div>
        </div>
        <div className="w-2/3 lg:w-3/4">
          <AnimateBox className="banner">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="next-image-fix filter blur-sm bg-gray-100">
                <Image
                  className="object-cover"
                  src={blurredBg}
                  alt="spacejoy happy customer"
                  height={'700'}
                  width={'1114'}
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  className="object-cover"
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,h_1050,w_1671/v1622172527/spj-v2/spj-happy-customer_ahkoxm.jpg"
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
