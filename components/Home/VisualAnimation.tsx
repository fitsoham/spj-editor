import Image from 'next/image';
import React from 'react';

const VisualAnimation: React.FC = () => {
  return (
    <Image
      className="filter contrast-125"
      src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1896,h_759/v1622186205/spj-v2/spj-living-room_gyepig.jpg"
      alt="spacejoy happy customer"
      height={'759'}
      width={'1896'}
    />
  );
};

export default React.memo(VisualAnimation);
