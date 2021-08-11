import Header from '@components/Playground/Header';
import SectionTitle from '@components/Shared/SectionTitle';
import Image from 'next/image';
import React from 'react';

const RoomSelection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header roomTypeTitle={'Living Room'} />
      <SectionTitle
        title="Select which room you want to design?"
        description="Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate."
      />
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 max-w-7xl justify-between mx-auto">
          <div className="relative h-80 flex-1 p-8 bg-white rounded shadow text-right">
            <div className="text-left max-w-sm">
              <h2 className="text-2xl mb-2">Living Room</h2>
              <p className="text-sm text-gray-500 mb-4">
                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.
              </p>
            </div>
            <div className="-mt-4">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_840/v1628578446/spj-v2/DIY/room-type/living-room_kmbjfe.png"
                alt="living-room"
                height={253}
                width={420}
              />
            </div>
          </div>
          <div className="relative h-80 flex-1 p-8 bg-white rounded shadow text-right">
            <div className="text-left max-w-sm">
              <h2 className="text-2xl mb-2">Home Office</h2>
              <p className="text-sm text-gray-500 mb-4">
                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.
              </p>
            </div>
            <div className="-mt-16">
              <Image
                src="https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_368/v1628578446/spj-v2/DIY/room-type/home-office_hsytti.png"
                alt="living-room"
                height={278}
                width={184}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
