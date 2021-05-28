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

const Featured = () => {
  return (
    <div className="py-10">
      <SectionTitle
        accent="indigo"
        feature="Media"
        title="We are proud to be Featured in"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit reiciendis officia vero ab nostrum
      asperiores aperiam? Illo vitae recusandae, incidunt quas sapiente quo maxime impedit cum, hic odio temporibus!"
      />
      <div className="bg-gray-100">
        <Controller>
          <Scene classToggle="entry" triggerHook={0.9} indicators={false} reverse={true}>
            <AnimateBox className="h-64 flex items-center justify-center">
              <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
              <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
              <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
              <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
              <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
            </AnimateBox>
          </Scene>
        </Controller>
      </div>
    </div>
  );
};

export default Featured;
