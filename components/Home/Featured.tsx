import Image from 'next/image';
import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
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
      &:nth-child(2) {
        animation-delay: 100ms;
      }
      &:nth-child(3) {
        animation-delay: 200ms;
      }
      &:nth-child(4) {
        animation-delay: 300ms;
      }
      &:nth-child(5) {
        animation-delay: 400ms;
      }
      &:nth-child(6) {
        animation-delay: 500ms;
      }
      &:nth-child(7) {
        animation-delay: 600ms;
      }
      &:nth-child(8) {
        animation-delay: 700ms;
      }
    }
  }
`;

const Featured: React.FC = () => {
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
        <div className="-mb-72 max-w-7xl mx-auto z-10 relative">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <ScrollTrigger start="-500px center" end="-100px center">
              <div className="grid gap-8 grid-cols-4">
                <Tween
                  from={{ scale: 0.95, opacity: 0, y: 50 }}
                  to={{ scale: 1, opacity: 1, y: 0 }}
                  stagger={0.5}
                  duration={1}
                >
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014244/shared/Brand%20logos%2007-2021/publication_LOGO-01_fohpe0.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014243/shared/Brand%20logos%2007-2021/publication_LOGO-03_obxond.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014243/shared/Brand%20logos%2007-2021/publication_LOGO-02_ogxwsc.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014242/shared/Brand%20logos%2007-2021/publication_LOGO-04_bj5aqr.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014241/shared/Brand%20logos%2007-2021/publication_LOGO-07_odqvkc.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014242/shared/Brand%20logos%2007-2021/publication_LOGO-04_bj5aqr.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1610014241/shared/Brand%20logos%2007-2021/publication_LOGO-07_odqvkc.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center py-0 px-8 rounded-md bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1610014241/shared/Brand%20logos%2007-2021/publication_LOGO-09_dodwjx.svg"
                      alt="spacejoy happy customer"
                      height={'130'}
                      width={'200'}
                    />
                  </div>
                </Tween>
              </div>
            </ScrollTrigger>
          </div>
          <p className="max-w-3xl mx-auto text-gray-50 text-center mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maiores ea possimus rem consectetur ipsa
            labore consequatur repellat odit nihil veniam, sint ipsum sit nostrum et omnis praesentium ducimus?
            Asperiores.
          </p>
        </div>
      </div>
    </>
  );
};

export default Featured;
