import SectionTitle from '@components/common/SectionTitle';
import Image from 'next/image';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
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
  &.entry {
    opacity: 1;
    & > div {
      opacity: 0;
      animation: ${entry} 0.8s forwards;
      transform: translateY(50px);
      &:nth-child(1) {
        animation-delay: 150ms;
      }
      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 350ms;
      }
      &:nth-child(4) {
        animation-delay: 400ms;
      }
      &:nth-child(5) {
        animation-delay: 450ms;
      }
    }
  }
`;

const Advantage = () => {
  return (
    <div>
      <SectionTitle
        accent="indigo"
        feature="Advantages"
        title="Design + Shopping + Spacejoy = 😍"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <div className="container px-4 mx-auto">
        <Controller>
          <Scene classToggle="entry" triggerHook={0.9} indicators={false} reverse={true}>
            <AnimateBox className="grid md:gap-5 xl:gap-8 grid-cols-6 items-center">
              <div className="bg-indigo-100 p-10 h-full rounded-xl col-start-1 col-end-3">
                <div className="flex flex-col">
                  <div className="text-right -mb-4 h-full">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188225/spj-v2/3d-icons/spj-7_uqoib6.svg"
                      alt="No markups"
                      height={'150'}
                      width={'150'}
                    />
                  </div>
                  <div>
                    <p className="text-indigo-500">Try Before you buy</p>
                    <h3 className="text-2xl mt-3 text-indigo-800">
                      Virtually try all the expensive products before making it final
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 p-10 h-full rounded-xl col-start-3 col-end-5">
                <div className="flex flex-col">
                  <div className="text-right -mb-4 h-full">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188221/spj-v2/3d-icons/spj-4_hhrkhz.svg"
                      alt="No markups"
                      height={'150'}
                      width={'150'}
                    />
                  </div>
                  <div>
                    <p className="text-green-500">Try Before you buy</p>
                    <h3 className="text-2xl mt-3 text-green-800">
                      Virtually try all the expensive products before making it final
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-10 h-full rounded-xl col-start-5 col-end-7">
                <div className="flex flex-col">
                  <div className="text-right -mb-4 h-full">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188241/spj-v2/3d-icons/spj-21_wkxzii.svg"
                      alt="No markups"
                      height={'150'}
                      width={'150'}
                    />
                  </div>
                  <div>
                    <p className="text-gray-500">Try Before you buy</p>
                    <h3 className="text-2xl mt-3 text-gray-800">
                      Virtually try all the expensive products before making it final
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-red-100 p-10 h-full rounded-xl col-start-1 col-end-4">
                <div className="flex flex-row-reverse items-end">
                  <div className="text-right -mb-4 h-full">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188230/spj-v2/3d-icons/spj-11_ievy9p.svg"
                      alt="No markups"
                      height={'450'}
                      width={'450'}
                    />
                  </div>
                  <div>
                    <p className="text-red-500">Try Before you buy</p>
                    <h3 className="text-2xl mt-3 text-red-800">
                      Virtually try all the expensive products before making it final
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-100 p-10 h-full rounded-xl col-start-4 col-end-7">
                <div className="flex flex-row-reverse items-end">
                  <div className="text-right h-full">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188231/spj-v2/3d-icons/spj-14_jawl1e.svg"
                      alt="No markups"
                      height={'450'}
                      width={'450'}
                    />
                  </div>
                  <div>
                    <p className="text-yellow-500">Try Before you buy</p>
                    <h3 className="text-2xl mt-3 text-yellow-800">
                      Virtually try all the expensive products before making it final
                    </h3>
                  </div>
                </div>
              </div>
            </AnimateBox>
          </Scene>
        </Controller>
      </div>
    </div>
  );
};

export default Advantage;
