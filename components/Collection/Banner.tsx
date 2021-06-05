import Image from 'next/image';
import React from 'react';

const CollectionBanner: React.FC = () => {
  return (
    <div className="flex max-h-screen bg-gray-800">
      <div className="flex-1">
        <div className="h-full">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="spacejoy happy customer"
            height={'700'}
            width={'896'}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="h-full flex items-center">
          <div className="p-10">
            <small className="text-sm text-white">Publish Date: June-10-21</small>
            <h1 className="text-7xl text-white mt-4 mb-4">
              Bedroom
              <br />
              Collection
            </h1>
            <p className="text-gray-400 text-sm max-w-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet eaque nesciunt, temporibus accusantium
              nemo dolorem inventore explicabo voluptates eum quisquam? Fugit nulla soluta animi repellat optio ab,
              asperiores odio unde!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
