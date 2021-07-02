import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../Shared/SectionTitle';

const MoveSlideshow = keyframes`
 to {
      transform: translateX(-100%)
  }
`;

const OutputGallery = styled.div`
  max-width: 3840px;
  overflow: hidden;
  transform: translateZ(0);
  white-space: nowrap;
  font-size: 0;
  picture {
    vertical-align: middle;
    transform: translateZ(0);
    animation: ${MoveSlideshow} 40s linear infinite;
    img {
      max-width: initial;
    }
  }
`;

const Output: React.FC = () => {
  return (
    <div>
      <SectionTitle
        feature="Output"
        title="Results that stun you"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <OutputGallery>
        <picture className="inline-block">
          <source
            srcSet="https://cdn2.macpaw.com/images/main/photo-grid-mobile.jpg 1x, https://cdn2.macpaw.com/images/main/photo-grid-mobile@2x.jpg 2x"
            media="(max-width: 768px)"
          />
          <source
            srcSet="https://cdn2.macpaw.com/images/main/photo-grid-medium.jpg 1x, https://cdn2.macpaw.com/images/main/photo-grid-medium@2x.jpg 2x"
            media="(max-width: 1440px)"
          />
          <source srcSet="https://cdn2.macpaw.com/images/main/photo-grid.jpg 1x, https://cdn2.macpaw.com/images/main/photo-grid@2x.jpg 2x" />
          <img
            src="https://cdn2.macpaw.com/images/main/photo-grid.jpg"
            srcSet="https://cdn2.macpaw.com/images/main/photo-grid@2x.jpg 2x"
            alt=""
          />
        </picture>
        <picture className="inline-block ml-4 lg:ml-6 2xl:ml-8">
          <source
            srcSet="https://cdn2.macpaw.com/images/main/photo-grid-mobile.jpg 1x, https://cdn2.macpaw.com/images/main/photo-grid-mobile@2x.jpg 2x"
            media="(max-width: 768px)"
          />
          <source
            srcSet="https://cdn2.macpaw.com/images/main/photo-grid-medium.jpg 1x, https://cdn2.macpaw.com/images/main/photo-grid-medium@2x.jpg 2x"
            media="(max-width: 1440px)"
          />
          <source srcSet="https://cdn2.macpaw.com/images/main/photo-grid.jpg 1x, https://cdn2.macpaw.com/images/main/photo-grid@2x.jpg 2x" />
          <img
            src="https://cdn2.macpaw.com/images/main/photo-grid.jpg"
            srcSet="https://cdn2.macpaw.com/images/main/photo-grid@2x.jpg 2x"
            alt=""
          />
        </picture>
      </OutputGallery>
    </div>
  );
};

export default Output;
