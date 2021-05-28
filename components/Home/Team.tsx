import Image from 'next/image';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';

const BigText = styled.h3`
  font-size: 12rem;
  @media (max-width: 1536px) {
    font-size: 10rem;
  }
  @media (max-width: 1280px) {
    font-size: 8rem;
  }
`;

const Team = () => {
  return (
    <div className="h-screen mt-40">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-5/12">
            <Controller>
              <Scene duration={200} triggerHook={0.2} pin={true} enabled={true} indicators={false}>
                <BigText className="text-5xl py-10 text-gray-200">Meet Our Team</BigText>
              </Scene>
            </Controller>
          </div>
          <div className="w-7/12">
            <div className="h-full grid grid-cols-2 grid-rows-2 md:gap-5 lg:gap:0 8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  className="rounded-xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1621832684/maria_castillero_zzcgvs.png"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1621927419/nathan_tuosfe.png"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_crop,g_face,h_827,w_827/v1621841011/lauren_q0btgw.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_crop,g_center,h_2477,w_2477/v1621934310/casey_davis_ybo6d4.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
