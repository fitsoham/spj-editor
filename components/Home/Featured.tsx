import Image from 'next/image';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../Shared/SectionTitle';

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
  &.entry {
    opacity: 1;
    & > div {
      opacity: 0;
      animation: ${entry} 0.8s forwards;
      transform: translateY(50px);
      &:nth-child(1) {
        animation-delay: 100ms;
      }
      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 300ms;
      }
      &:nth-child(4) {
        animation-delay: 400ms;
      }
      &:nth-child(5) {
        animation-delay: 500ms;
      }
      &:nth-child(6) {
        animation-delay: 600ms;
      }
    }
  }
`;

const Featured = () => {
  return (
    <>
      <SectionTitle
        accent="yellow"
        feature="Media"
        title="We are proud to be Featured in"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit reiciendis officia vero ab nostrum
      asperiores aperiam? Illo vitae recusandae, incidunt quas sapiente quo maxime impedit cum, hic odio temporibus!"
      />
      <div className="container mx-auto px-4">
        <div className="mb-40 max-w-7xl mx-auto">
          <Controller>
            <Scene classToggle="entry" triggerHook={1} indicators={false} reverse={true}>
              <AnimateBox className="mt-6 grid grid-cols-2 lg:gap-4 xl:gap-8 md:grid-cols-3 lg:mt-8">
                <div className="col-span-1 flex justify-center py-0 px-8 rounded-xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                    alt="spacejoy happy customer"
                    height={'130'}
                    width={'200'}
                  />
                </div>
                <div className="col-span-1 flex justify-center py-0 px-8 rounded-xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1610014243/shared/Brand%20logos%2007-2021/publication_LOGO-03_obxond.svg"
                    alt="spacejoy happy customer"
                    height={'130'}
                    width={'200'}
                  />
                </div>
                <div className="col-span-1 flex justify-center py-0 px-8 rounded-xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1610014243/shared/Brand%20logos%2007-2021/publication_LOGO-02_ogxwsc.svg"
                    alt="spacejoy happy customer"
                    height={'130'}
                    width={'200'}
                  />
                </div>
                <div className="col-span-1 flex justify-center py-0 px-8 rounded-xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1610014242/shared/Brand%20logos%2007-2021/publication_LOGO-04_bj5aqr.svg"
                    alt="spacejoy happy customer"
                    height={'130'}
                    width={'200'}
                  />
                </div>
                <div className="col-span-1 flex justify-center py-0 px-8 rounded-xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1610014241/shared/Brand%20logos%2007-2021/publication_LOGO-07_odqvkc.svg"
                    alt="spacejoy happy customer"
                    height={'130'}
                    width={'200'}
                  />
                </div>
                <div className="col-span-1 flex justify-center py-0 px-8 rounded-xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1610014241/shared/Brand%20logos%2007-2021/publication_LOGO-09_dodwjx.svg"
                    alt="spacejoy happy customer"
                    height={'130'}
                    width={'200'}
                  />
                </div>
              </AnimateBox>
            </Scene>
          </Controller>
        </div>
      </div>
    </>
  );
};

export default Featured;
