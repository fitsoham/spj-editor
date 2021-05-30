import Modal from '@components/common/Modal';
import SectionTitle from '@components/common/SectionTitle';
import React from 'react';

const Packages = (): JSX.Element => {
  return (
    <div>
      <SectionTitle accent="indigo" feature="Packages" title="Packages Offered by Spacejoy" />
      <div className="bg-indigo-100 py-40">
        <div className="container mx-auto text-center">
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Packages;
