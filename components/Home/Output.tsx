import React from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const ParallaxStyled = styled.div`
  .parallax {
    height: 500px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
    }
  }
`;

const Output = () => {
  return (
    <div>
      <SectionTitle
        accent="yellow"
        feature="Output"
        title="Results that stun you"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <ParallaxStyled>
        <Controller>
          <div className="section" />
          <Scene indicators={false} duration="200%" triggerHook="onEnter">
            <Timeline wrapper={<div className="parallax" />}>
              <Tween
                position="0"
                from={{
                  yPercent: -50,
                }}
                to={{
                  yPercent: 0,
                }}
              >
                <img
                  src="https://res.cloudinary.com/spacejoy/image/upload/v1622190830/spj-v2/spj-entry-way_h8ep62.jpg"
                  alt="spacejoy Output"
                />
              </Tween>
              <Tween
                position="0"
                from={{
                  top: '0%',
                  scale: 1.5,
                }}
                to={{
                  top: '70%',
                  scale: 2,
                }}
              >
                <h2>Das ist ein Titel</h2>
              </Tween>
            </Timeline>
          </Scene>
          <div className="section" />
        </Controller>
      </ParallaxStyled>
    </div>
  );
};

export default Output;
