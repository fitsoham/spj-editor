import empty from '@public/lotties/empty.json';
import room from '@public/lotties/room.json';
import Lottie from 'lottie-react-web';
import React from 'react';

interface LottieAnimation {
  animation: string;
}

const getAnimation = (animation: string) => {
  switch (animation) {
    case 'empty':
      return empty;
    case 'room':
      return room;
    default:
      return empty;
  }
};

const LottieAnimation: React.FC<LottieAnimation> = ({ animation }) => {
  return (
    <Lottie
      ariaLabel="Lottie"
      ariaRole="present"
      options={{
        loop: false,
        animationData: getAnimation(animation),
      }}
    />
  );
};

export default React.memo(LottieAnimation);
