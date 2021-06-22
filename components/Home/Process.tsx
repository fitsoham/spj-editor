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
        <Scene duration={3500} triggerHook="onLeave" pin={true} indicators={true} offset={-80}>
          <Timeline
            labels={[
              {
                label: 'final',
                position: 4,
              },
            ]}
          >
            <div className="relative container mx-auto rounded-2xl shadow-xl overflow-hidden">
              <div className="next-image-fix mx-auto inset-0 bg-indigo-200 rounded-2xl">
                <Image
                  className="object-cover rounded-2xl"
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-empty_q8w3ma.jpg"
                  height="900"
                  width="1700"
                />
              </div>
              <Tween from={{ opacity: 0, y: -20 }} to={{ opacity: 1, y: 0 }}>
                <div className="absolute next-image-fix mx-auto inset-0 bg-pink-200 rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-scandinavian_rilssr.jpg"
                    height="900"
                    width="1700"
                  />
                </div>
              </Tween>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                <div className="absolute next-image-fix mx-auto inset-0 bg-yellow-200 rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-modern_wqhnru.jpg"
                    height="900"
                    width="1700"
                  />
                </div>
              </Tween>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                <div className="absolute next-image-fix mx-auto inset-0 bg-blue-200 rounded-2xl">
                  <Image
                    className="object-cover rounded-2xl"
                    src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-industrial_npa9wm.jpg"
                    height="900"
                    width="1700"
                  />
                </div>
              </Tween>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                <div className="absolute next-image-fix mx-auto inset-0 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <div>
                    <h2 className="text-9xl text-white text-center">Lets Start</h2>
                    <div className="flex mx-auto max-w-xl mt-6 items-center justify-center bg-gray-500">
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
              <Tween position="final" />
            </div>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
};

export default Process;
