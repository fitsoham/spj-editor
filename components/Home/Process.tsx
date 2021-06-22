import SectionTitle from '@components/Shared/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Process: React.FC = () => {
  return (
    <div className="bg-white">
      <SectionTitle
        feature="Process"
        title="How Spacejoy works"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <Controller>
        <Scene duration={2500} triggerHook={0.1} pin={true}>
          <Timeline paused={true} offset={0.75}>
            <div className="relative container mx-auto h-auto rounded-2xl overflow-hidden">
              <div className="next-image-fix mx-auto inset-0 h-1/2 bg-indigo-200 rounded-2xl">
                <Image
                  className="object-cover rounded-2xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-empty_q8w3ma.jpg"
                  height="1100"
                  width="2200"
                />
              </div>
              <Tween from={{ opacity: 0, y: -20 }} to={{ opacity: 1, y: 0 }} duration={2} position="+=2">
                <div className="absolute next-image-fix mx-auto inset-0 h-1/2 bg-pink-200 rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-scandinavian_rilssr.jpg"
                    height="1100"
                    width="2200"
                  />
                </div>
              </Tween>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={5} position="+=2">
                <div className="absolute next-image-fix mx-auto inset-0 h-1/2 bg-yellow-200 rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-modern_wqhnru.jpg"
                    height="1100"
                    width="2200"
                  />
                </div>
              </Tween>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} position="+=2">
                <div className="absolute next-image-fix mx-auto inset-0 h-1/2 bg-blue-200 rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-industrial_npa9wm.jpg"
                    height="1100"
                    width="2200"
                  />
                </div>
              </Tween>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} position="+=2">
                <div className="absolute next-image-fix mx-auto inset-0 bg-gray-500 rounded-2xl flex items-center justify-center">
                  <div>
                    <h2 className="text-7xl text-white text-center">Lets Start</h2>
                    <div className="flex max-w-4xl mt-6 items-center justify-center">
                      <div className="flex-1 mr-4 text-center">
                        <Link href="/interior-designs">
                          <a className="shadow-sm hover:shadow-lg text-gray-900 py-3 px-6 rounded-xl bg-white tracking-wide">
                            Explore Ideas
                          </a>
                        </Link>
                      </div>
                      <div className="flex-1 text-center">
                        <Link href="">
                          <a className="shadow-sm hover:shadow-lg text-white py-3 px-6 rounded-xl bg-gray-900 tracking-wide">
                            Start Project
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tween>
            </div>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
};

export default Process;
