import SectionTitle from '@components/Shared/SectionTitle';
import React from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

const Process: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Controller>
        <Scene triggerHook={0.5} duration={700}>
          <Timeline>
            <Tween from={{ opacity: 0, scale: 0.95 }}>
              <div>
                <SectionTitle
                  accent="light"
                  feature="Process"
                  title="How Spacejoy works"
                  description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
                />
              </div>
            </Tween>
            <Tween from={{ opacity: 0, scale: 0.95 }} stagger={0.2}>
              <div className="w-28 h-28 bg-red-300 mt-8"></div>
              <div className="w-28 h-28 bg-red-300 mt-8"></div>
              <div className="w-28 h-28 bg-red-300 mt-8"></div>
              <div className="w-28 h-28 bg-red-300 mt-8"></div>
              <div className="w-28 h-28 bg-red-300 mt-8"></div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
};

export default Process;
