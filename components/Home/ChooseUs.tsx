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
  &.entry > div {
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
`;

const ChooseUs = () => {
  return (
    <>
      <SectionTitle
        accent="pink"
        feature="Best Service"
        title="Why Pick Spacejoy"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <div className="container mx-auto">
        <Controller>
          <Scene classToggle="entry" triggerHook={1} indicators={false} reverse={true}>
            <AnimateBox className="flex items-center justify-center">
              <div className="shadow-lg border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center mx-5">
                <div className="text-center">
                  <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-red-100 flex justify-center items-center">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188237/spj-v2/3d-icons/spj-22_ypkbw5.svg"
                      alt="No markups"
                      height={'200'}
                      width={'200'}
                    />
                  </div>
                  <h3 className="text-xl mb-2">No markups</h3>
                  <p className="text-sm text-gray-500">
                    Our design experts will transform any room in your home on our smart 3D desktop App.
                  </p>
                </div>
              </div>
              <div className="shadow-lg border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center mx-5">
                <div className="text-center">
                  <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-yellow-100 flex justify-center items-center">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188240/spj-v2/3d-icons/spj-23_lgp9bw.svg"
                      alt="Comp Service"
                      height={'200'}
                      width={'200'}
                    />
                  </div>
                  <h3 className="text-xl mb-2">Comp Service</h3>
                  <p className="text-sm text-gray-500">
                    Our design experts will transform any room in your home on our smart 3D desktop App.
                  </p>
                </div>
              </div>
              <div className="shadow-lg border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center mx-5">
                <div className="text-center">
                  <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-green-100 flex justify-center items-center">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188220/spj-v2/3d-icons/spj-1_jas7do.svg"
                      alt="Returns"
                      height={'200'}
                      width={'200'}
                    />
                  </div>
                  <h3 className="text-xl mb-2">Returns</h3>
                  <p className="text-sm text-gray-500">
                    Our design experts will transform any room in your home on our smart 3D desktop App.
                  </p>
                </div>
              </div>
              <div className="shadow-lg border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center mx-5">
                <div className="text-center">
                  <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-indigo-100 flex justify-center items-center">
                    <Image
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1622188230/spj-v2/3d-icons/spj-11_ievy9p.svg"
                      alt="24/7 Support"
                      height={'200'}
                      width={'200'}
                    />
                  </div>
                  <h3 className="text-xl mb-2">24/7 Support</h3>
                  <p className="text-sm text-gray-500">
                    Our design experts will transform any room in your home on our smart 3D desktop App.
                  </p>
                </div>
              </div>
            </AnimateBox>
          </Scene>
        </Controller>
      </div>
    </>
  );
};

export default ChooseUs;
