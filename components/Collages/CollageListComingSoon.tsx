import LottieAnimation from '@components/Shared/LottieAnimation';
import React from 'react';

const CollageListComingSoon: React.FC = () => {
  return (
    <div>
      <div className="w-1/2 md:w-1/4 lg:w-1/6 mx-auto">
        <LottieAnimation animation="wip" loop={true} />
      </div>
      <div className="flex flex-col items-center justify-center mt-6 mb-8">
        <h2 className="text-3xl">Come back soon!</h2>
        <p className="text-gray-400">
          We are putting together an amazing set of collages for you. Come back later to see them.
        </p>
      </div>
    </div>
  );
};

export default CollageListComingSoon;
