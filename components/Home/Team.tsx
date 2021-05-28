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
    <div className="mt-40 relative">
      <div className="absolute top-200 left-0 shape-2" />
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
            <div className="h-full grid grid-cols-3 grid-rows-3 md:gap-5 lg:gap:0 8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1621832684/maria_castillero_zzcgvs.png"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1617713822/web/avatars/0_-_Sarah_Nelson_bq1dzz.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1621841011/lauren_q0btgw.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1621934310/casey_davis_ybo6d4.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1617712860/web/avatars/0_-_Kate_Harvey_pxcauc.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1617712377/web/avatars/Final_Edits_To_Headshots-0018_-_elisabeth_populo_kucasa.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1617711683/web/avatars/self_portrait_edit-0102_-_Angela_Amore_npaf3j.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1621832684/nathan_scheuer_x2hkbu.jpg"
                  alt="spacejoy happy customer"
                  height={'500'}
                  width={'500'}
                />
              </div>
              <div className="rounded-xl">
                <Image
                  className="rounded-xl shadow-lg"
                  src="https://res.cloudinary.com/spacejoy/image/upload/c_fill,g_face,h_800,w_800/v1617712050/web/avatars/Chelsie_Somerfield_Professional_Photo_-_chelsie_somerfield_zn7pfq.jpg"
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
