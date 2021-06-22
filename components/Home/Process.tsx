import SectionTitle from '@components/Shared/SectionTitle';
import { ArrowRightIcon } from '@heroicons/react/outline';
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
        <Scene duration={3500} triggerHook="onLeave" pin={true} indicators={false} offset={-80}>
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
                <div className="absolute mx-auto inset-0 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <div>
                    <h2 className="text-9xl text-white text-center">Lets Start</h2>
                    <div className="mt-10 text-center group">
                      <Link href="/interior-designs">
                        <a className="shadow-sm text-gray-900 py-3 px-6 rounded-xl bg-white inline-block">
                          <ArrowRightIcon className="h-8 w-8 transition group-hover:translate-x-2" />
                        </a>
                      </Link>
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
