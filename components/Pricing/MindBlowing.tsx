import SectionTitle from '@components/common/SectionTitle';
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

const MindBlowing = () => {
  return (
    <div>
      <SectionTitle
        accent="indigo"
        title="Literally, we are mind blowing"
        description="Pick from one of our three online interior design packages, custom-made keeping your budget, style and interior design needs in mind"
      />
      <div className="flex">
        <div className="">
          <AnimateBox className="banner rounded-xl">
            <Image
              src="https://res.cloudinary.com/spacejoy/image/upload/v1622344281/spj-v2/spj-living-room_x9d25x.jpg"
              alt="spacejoy happy customer"
              width={'1000'}
              height={'666'}
            />
            <div className="absolute shape-2 top-0 -ml-14 -mt-10"></div>
          </AnimateBox>
        </div>
        <div className="relative h-full px-12 max-w-lg justify-center self-center">
          <div>
            <div className="absolute md:-top-28 lg:-top-40 left-16">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/v1622344845/spj-v2/3d-icons/mind-blown_jmrgfx.png"
                alt="spacejoy happy customer"
                width={'97'}
                height={'113'}
              />
            </div>
            <p className="text-sm text-gray-600 leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum veniam voluptates consequatur ea quae
              vitae impedit sunt labore magnam id cumque, maxime ducimus nobis. Cum quas repellendus animi excepturi
              minima? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <h4 className="mt-4">- Team Spacejoy</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindBlowing;
