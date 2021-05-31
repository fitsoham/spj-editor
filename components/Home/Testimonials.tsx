import Modal from '@components/Common/Modal';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const Testimonials = (): JSX.Element => {
  return (
    <div className="relative">
      <SectionTitle
        accent="green"
        feature="Testimonials"
        title="Hear it from our customers"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto">
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
