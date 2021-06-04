import Image from 'next/image';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
        opacity: 0;
        transform: translateY(50px);
	}
	to {
        opacity: 1;
        transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  opacity: 0;
  &.entry {
    animation: ${entry} 0.4s forwards;
  }
`;

interface TeamMemberInterface {
  designer: {
    firstName: string;
    lastName: string;
    icon: string;
  };
}

const TeamMember: React.FC<TeamMemberInterface> = ({ designer }) => {
  return (
    <li>
      <Controller>
        <Scene classToggle="entry" triggerHook={1} indicators={false} reverse={true}>
          <AnimateBox>
            <Image
              className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover filter contrast-125"
              src={`https://res.cloudinary.com/spacejoy/${designer.icon}`}
              alt={designer.firstName}
              height={'180'}
              width={'180'}
            />
            <div className="text-xs lg:text-sm">
              <h3 className="font-medium">
                {designer.firstName} {designer.lastName}
              </h3>
              <p className="text-indigo-400">Design Expert</p>
            </div>
          </AnimateBox>
        </Scene>
      </Controller>
    </li>
  );
};

export default TeamMember;
