import SectionTitle from '@components/Shared/SectionTitle';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/outline';
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
        <div className="relative container mx-auto px-4">
          <div className="flex space-x-10 max-w-5xl mx-auto mb-28">
            <div className="flex-1">
              <h3 className="text-lg mb-2 text-gray-900">1. Tell us what you like </h3>
              <p className="text-gray-600">
                Go through our onboarding questionnaire and let us know what interior style suits you.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-2 text-gray-900">2. Upload your floor plan </h3>
              <p className="text-gray-600">
                Based on your floor plan, we generate a 3D model of your apartment and generate realistic renderings.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-2 text-gray-900">3. Interiors as a subscription</h3>
              <p className="text-gray-600">
                Happy with our proposal? Lay back and relax! We’ll ship the furniture and assemble it for you.
              </p>
            </div>
          </div>
          <Scene duration={3000} triggerHook="onLeave" pin={true} indicators={false} offset={-80}>
            <Timeline
              labels={[
                {
                  label: 'two',
                  position: 1,
                },
                {
                  label: 'final',
                  position: 5,
                },
              ]}
              target={
                <>
                  <div className="next-image-fix mx-auto inset-0 bg-indigo-200 rounded-2xl shadow-lg">
                    <Image
                      className="object-cover rounded-2xl"
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-empty_q8w3ma.jpg"
                      height="850"
                      width="1700"
                    />
                    <div className="absolute w-full">
                      <ArrowDownIcon className="animate-bounce h-6 w-6 mt-8 mx-auto text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute next-image-fix mx-auto inset-0 bg-pink-200 rounded-2xl">
                    <Image
                      className="object-cover rounded-2xl"
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-scandinavian_rilssr.jpg"
                      height="850"
                      width="1700"
                    />
                  </div>
                  <div className="absolute next-image-fix mx-auto inset-0 bg-yellow-200 rounded-2xl">
                    <Image
                      className="object-cover rounded-2xl"
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-modern_wqhnru.jpg"
                      height="850"
                      width="1700"
                    />
                  </div>
                  <div className="absolute next-image-fix mx-auto inset-0 bg-blue-200 rounded-2xl">
                    <Image
                      className="object-cover rounded-2xl"
                      src="https://res.cloudinary.com/spacejoy/image/upload/v1624342360/spj-v2/transition/hp-transformation-industrial_npa9wm.jpg"
                      height="850"
                      width="1700"
                    />
                  </div>
                  <div className="absolute mx-auto inset-0 bg-gray-500 rounded-2xl flex items-center justify-center">
                    <div>
                      <h2 className="text-9xl text-white text-center">Lets Start</h2>
                      <div className="mt-10 text-center group">
                        <Link href="/interior-designs">
                          <a className="shadow-sm text-gray-500 py-2 px-8 rounded-full bg-white inline-block focus:ring-1 focus:ring-gray-900 focus:outline-none">
                            <ArrowRightIcon className="h-8 w-8 transition group-hover:translate-x-2" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <Tween target={0} />
              <Tween from={{ opacity: 0, y: -20 }} to={{ opacity: 1, y: 0 }} target={1} position="two" />
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} target={2} />
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} target={3} />
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} target={4} />
              <Tween position="final" />
            </Timeline>
          </Scene>
        </div>
      </Controller>
    </div>
  );
};

export default Process;
