import Image from 'next/image';
import React from 'react';

const DesignList: React.FC = () => {
  return (
    <div className="bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <Image
              className="object-cover rounded-lg"
              alt="tmp"
              src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              height="400"
              width="500"
            />
            <div className="py-2">
              <p className="text-lg font-semibold">Bedroom</p>
              <p className="text-gray-600 text-sm">2000+ 3D Renders</p>
            </div>
          </div>
          <div>
            <Image
              className="object-cover rounded-lg"
              alt="tmp"
              src="https://images.unsplash.com/photo-1607522783211-cb0d1ffdab8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              height="400"
              width="500"
            />
            <div className="py-2">
              <p className="text-lg font-semibold">Bedroom</p>
              <p className="text-gray-600 text-sm">2000+ 3D Renders</p>
            </div>
          </div>
          <div>
            <Image
              className="object-cover rounded-lg"
              alt="tmp"
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
              height="400"
              width="500"
            />
            <div className="py-2">
              <p className="text-lg font-semibold">Bedroom</p>
              <p className="text-gray-600 text-sm">2000+ 3D Renders</p>
            </div>
          </div>
          <div>
            <Image
              className="object-cover rounded-lg"
              alt="tmp"
              src="https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              height="400"
              width="500"
            />
            <div className="py-2">
              <p className="text-lg font-semibold">Bedroom</p>
              <p className="text-gray-600 text-sm">2000+ 3D Renders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignList;
