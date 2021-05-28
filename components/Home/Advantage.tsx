import SectionTitle from '@components/common/SectionTitle';
import React from 'react';

const Advantage = () => {
  return (
    <div>
      <SectionTitle
        accent="indigo"
        feature="Advantages"
        title="Design + Shopping + Spacejoy = 😍"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <div className="py-24">
        <div className="container mx-auto">
          <div className="shadow-sm bg-white p-4 h-32 w-64 rounded-xl flex items-center justify-center mx-5">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
