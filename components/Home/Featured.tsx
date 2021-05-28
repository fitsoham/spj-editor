import Image from 'next/image';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../common/SectionTitle';

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
      <div className="mb-32">
        <Controller>
          <Scene classToggle="entry" triggerHook={0.9} indicators={false} reverse={true}>
            <AnimateBox className="flex items-center justify-center px-5">
              <div className="shadow-md border border-gray-200 bg-white p-4 h-32 w-64 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="shadow-md border border-gray-200 bg-white p-4 h-32 w-64 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014243/shared/Brand%20logos%2007-2021/publication_LOGO-03_obxond.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="shadow-md border border-gray-200 bg-white p-4 h-32 w-64 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014243/shared/Brand%20logos%2007-2021/publication_LOGO-02_ogxwsc.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="shadow-md border border-gray-200 bg-white p-4 h-32 w-64 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014242/shared/Brand%20logos%2007-2021/publication_LOGO-04_bj5aqr.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
              <div className="shadow-md border border-gray-200 bg-white p-4 h-32 w-64 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1610014241/shared/Brand%20logos%2007-2021/publication_LOGO-07_odqvkc.svg"
                  alt="spacejoy happy customer"
                  height={'130'}
                  width={'200'}
                />
              </div>
            </AnimateBox>
          </Scene>
        </Controller>
      </div>
    </>
  );
};

export default Featured;
