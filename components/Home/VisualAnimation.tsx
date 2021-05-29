import Image from 'next/image';
import React from 'react';

const VisualAnimation = () => {
  return (
    <Image
      className="filter contrast-125"
      src="https://res.cloudinary.com/spacejoy/image/upload/v1622186205/spj-v2/spj-living-room_gyepig.jpg"
      alt="spacejoy happy customer"
      height={'759'}
      width={'1896'}
    />
  );
};

export default VisualAnimation;
